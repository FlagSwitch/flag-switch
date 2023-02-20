import React from 'react';
import { StyledHeader } from './Header.style';
import Navbar from '../Navbar';
export const Header: React.FC = () => {

  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
}