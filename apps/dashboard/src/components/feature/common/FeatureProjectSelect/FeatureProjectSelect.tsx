import useProjects from "hooks/api/getters/useProjects/useProjects";
import GeneralSelect, {
  ISelectOption,
  IGeneralSelectProps,
} from "components/common/GeneralSelect/GeneralSelect";
import { ProjectWithRelationsCount } from "prisma-client";
interface IFeatureProjectSelectProps
  extends Omit<IGeneralSelectProps, "options"> {
  enabled: boolean;
  value: string;
  filter: (projectId: string) => boolean;
}

const FeatureProjectSelect = ({
  enabled,
  value,
  onChange,
  filter,
  ...rest
}: IFeatureProjectSelectProps) => {
  const { projects } = useProjects();

  if (!enabled) {
    return null;
  }

  const formatOption = (project: ProjectWithRelationsCount) => {
    return {
      key: project.id,
      label: project.id,
      title: project.description,
    };
  };

  let options: ISelectOption[] | undefined;

  if (filter) {
    options = projects
      ?.filter((project) => filter(project.id))
      .map(formatOption) as ISelectOption[];
  } else {
    options = projects?.map(formatOption) as ISelectOption[];
  }

  if (options && value && !options.find((o) => o.key === value)) {
    options.push({ key: value, label: value });
  }

  return (
    <GeneralSelect
      label="Project"
      options={options}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default FeatureProjectSelect;
