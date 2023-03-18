import { useFeatureTypes } from "hooks/api/getters/useFeatureTypes/useFeatureTypes";
import GeneralSelect, {
  IGeneralSelectProps,
  ISelectOption,
} from "components/common/GeneralSelect/GeneralSelect";
import { FeatureTypeEnum } from "prisma-client";

interface IFeatureTypeSelectProps
  extends Omit<IGeneralSelectProps, "options" | "value"> {
  value: FeatureTypeEnum;
  editable: boolean;
}

interface IFeatureTypeSelectOption {
  key: FeatureTypeEnum;
  label?: FeatureTypeEnum;
  title?: string;
}

const FeatureTypeSelect = ({
  editable,
  value,
  id,
  label,
  onChange,
  ...rest
}: IFeatureTypeSelectProps) => {
  const { data: featureTypes } = useFeatureTypes();

  const options: IFeatureTypeSelectOption[] | undefined = featureTypes?.map(
    (t) => ({
      key: t.name,
      label: t.name,
      title: t.description || "",
    })
  );

  if (!options?.some((o) => o.key === value)) {
    options?.push({ key: value, label: value });
  }

  return (
    <>
      <GeneralSelect
        disabled={!editable}
        options={options as ISelectOption[]}
        value={value}
        onChange={onChange}
        label={label}
        id={id}
        {...rest}
      />
    </>
  );
};

export default FeatureTypeSelect;
