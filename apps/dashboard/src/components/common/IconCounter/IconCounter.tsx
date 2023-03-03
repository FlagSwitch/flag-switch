import React, { ReactNode, FC } from "react";

import {
  StyledContainer,
  StyledCounter,
  StyledIcon,
} from "./IconCounter.style";

interface IIconCounterProps {
  icon: ReactNode;
  count: number;
  className?: string;
}

const IconCounter: FC<IIconCounterProps> = ({ icon, count }) => {
  return (
    <StyledContainer>
      <StyledIcon>{icon}</StyledIcon>
      <StyledCounter>{count}</StyledCounter>
    </StyledContainer>
  );
};

export default IconCounter;
