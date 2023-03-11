import { FC } from "react";
import { StyledFlagSwitch } from "./FlagSwitch.style";

interface FlagSwitchPros {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FlagSwitch: FC<FlagSwitchPros> = ({ checked, handleChange }) => {
  return (
    <StyledFlagSwitch sx={{ m: 1 }} onChange={handleChange} checked={checked} />
  );
};
