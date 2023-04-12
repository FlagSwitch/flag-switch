import React, {
  UIEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MaterialReactTable, {
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_SortingState,
  type MRT_Virtualizer,
} from "material-react-table";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FavoriteIconButton } from "components/common/FavoriteIconButton/FavoriteIconButton";
type FeatureToggleApiResponse = {
  data: Array<FeatureToggle>;
  meta: {
    totalRowCount: number;
  };
};

type FeatureToggle = {
  favorite: string;
  queried: string;
  type: string;
  name: string;
  createdAt: number;
  projectId: string;
};

const fetchSize = 25;

const FeatureTable = () => {
  const tableContainerRef = useRef<HTMLDivElement>(null); //we can get access to the underlying TableContainer element and react to its scroll events
  const rowVirtualizerInstanceRef =
    useRef<MRT_Virtualizer<HTMLDivElement, HTMLTableRowElement>>(null); //we can get access to the underlying Virtualizer instance and call its scrollToIndex method

  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const [isFavoriteSortOn, setIsFavoriteSortOn] = useState(false);
  const [globalFilter, setGlobalFilter] = useState<string>();
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const columns: MRT_ColumnDef<FeatureToggle>[] = [
    {
      accessorKey: "favorite",
      enableColumnActions: false,
      header: "",
      Header: (
        <FavoriteIconButton
          isFavorite={isFavoriteSortOn}
          size="medium"
          onClick={() => setIsFavoriteSortOn(!isFavoriteSortOn)}
        />
      ),
      minSize: 60,
      size: 50,
    },
    {
      accessorKey: "queried",
      header: "Last Query",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "createdAt",
      header: "Created",
    },
    {
      accessorKey: "projectId",
      header: "Project ID",
    },
  ];

  const { data, fetchNextPage, isError, isFetching, isLoading } =
    useInfiniteQuery<FeatureToggleApiResponse>({
      queryKey: ["table-data", columnFilters, globalFilter, sorting],
      queryFn: async ({ pageParam = 0 }) => {
        const url = new URL(
          "/api/data",
          process.env.NODE_ENV === "production"
            ? "https://www.material-react-table.com"
            : "https://www.material-react-table.com"
        );
        url.searchParams.set("start", `${pageParam * fetchSize}`);
        url.searchParams.set("size", `${fetchSize}`);
        url.searchParams.set("filters", JSON.stringify(columnFilters ?? []));
        url.searchParams.set("globalFilter", globalFilter ?? "");
        url.searchParams.set("sorting", JSON.stringify(sorting ?? []));

        const response = await fetch(url.href);
        const json = (await response.json()) as FeatureToggleApiResponse;
        return json;
      },
      getNextPageParam: (_lastGroup, groups) => groups.length,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    });

  const flatData = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data]
  );

  const totalDBRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0;
  const totalFetched = flatData.length;

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 400px of the bottom of the table, fetch more data if we can
        if (
          scrollHeight - scrollTop - clientHeight < 400 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );

  //scroll to top of table when sorting or filters change
  useEffect(() => {
    if (rowVirtualizerInstanceRef.current) {
      rowVirtualizerInstanceRef.current.scrollToIndex(0);
    }
  }, [sorting, columnFilters, globalFilter]);

  //a check on mount to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  return (
    <MaterialReactTable
      columns={columns}
      data={flatData}
      enablePagination={false}
      enableRowVirtualization //optional, but recommended if it is likely going to be more than 100 rows
      manualFiltering
      manualSorting
      muiTableContainerProps={{
        ref: tableContainerRef, //get access to the table container element
        sx: { maxHeight: "600px" }, //give the table a max height
        onScroll: (
          event: UIEvent<HTMLDivElement> //add an event listener to the table container element
        ) => fetchMoreOnBottomReached(event.target as HTMLDivElement),
      }}
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: "error",
              children: "Error loading data",
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onSortingChange={setSorting}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        showAlertBanner: isError,
        showProgressBars: isFetching,
        sorting,
      }}
      rowVirtualizerInstanceRef={rowVirtualizerInstanceRef} //get access to the virtualizer instance
      rowVirtualizerProps={{ overscan: 4 }}
    />
  );
};

export default FeatureTable;
