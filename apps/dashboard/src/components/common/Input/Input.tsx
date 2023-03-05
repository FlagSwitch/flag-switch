import { TextField, OutlinedTextFieldProps, styled } from "@mui/material";

interface IInputProps extends Omit<OutlinedTextFieldProps, "variant"> {
  label: string;
  error?: boolean;
  errorText?: string;
  style?: Object;
  className?: string;
  value: string;
  onChange: (e: any) => any;
  onFocus?: (e: any) => any;
  onBlur?: (e: any) => any;
  multiline?: boolean;
  rows?: number;
}

const StyledDiv = styled("div")({
  position: "relative",
});

const Input = ({
  label,
  placeholder,
  error,
  errorText,
  style,
  className,
  value,
  onChange,
  ...rest
}: IInputProps) => {
  return (
    <StyledDiv data-loading>
      <TextField
        size="small"
        variant="outlined"
        label={label}
        placeholder={placeholder}
        error={error}
        helperText={errorText}
        style={style}
        className={className ? className : ""}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </StyledDiv>
  );
};

export default Input;
