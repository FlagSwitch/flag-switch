import { FC } from "react";
import { StyledDarkModeSwitch } from "./DarkModeSwitch.style";

interface DarkModeSwitchPros {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DarkModeSwitch: FC<DarkModeSwitchPros> = ({
  checked,
  handleChange,
}) => {
  return (
    <StyledDarkModeSwitch
      sx={{ m: 1 }}
      onChange={handleChange}
      checked={checked}
    />
  );
};
