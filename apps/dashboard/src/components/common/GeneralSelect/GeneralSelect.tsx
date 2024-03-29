import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  SelectChangeEvent,
} from "@mui/material";
import { SELECT_ITEM_ID } from "utils/componentIds";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export interface ISelectOption {
  key: string;
  title?: string;
  label?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export interface IGeneralSelectProps extends Omit<SelectProps, "onChange"> {
  name?: string;
  value?: string;
  label?: string | null;
  options: ISelectOption[];
  onChange: (key: string) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  classes?: any;
  defaultValue?: string;
}

const GeneralSelect: React.FC<IGeneralSelectProps> = ({
  name,
  value = "",
  label = "",
  options,
  onChange,
  id,
  disabled = false,
  className,
  classes,
  fullWidth,
  ...rest
}) => {
  const onSelectChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    onChange(String(event.target.value));
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      classes={classes}
      fullWidth={fullWidth}
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        name={name}
        disabled={disabled}
        onChange={onSelectChange}
        className={className}
        label={label}
        id={id}
        value={value}
        IconComponent={KeyboardArrowDownOutlined}
        {...rest}
      >
        {options?.map((option) => (
          <MenuItem
            sx={option.sx}
            key={option.key}
            value={option.key}
            title={option.title || ""}
            data-testid={`${SELECT_ITEM_ID}-${option.label}`}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GeneralSelect;
