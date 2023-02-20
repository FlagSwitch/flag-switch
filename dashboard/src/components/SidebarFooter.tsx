import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { Typography } from './Typography';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from '../context/ThemeContext';

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}


const StyledSidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCollapsedSidebarFooter = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, collapsed, ...rest }) => {
  const { theme, toggleThemeMode } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter>
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={theme === 'dark' ? true : false}
            onChange={toggleThemeMode}
            sunColor="#0098e5"
            moonColor='#59d0ff'
            size={20}
          />
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={theme === 'dark'}
            onChange={toggleThemeMode}
            sunColor="#0098e5"
            moonColor='#59d0ff'
            size={20}
          />
          <Typography fontWeight={600}>Toggle Theme</Typography>
        </StyledSidebarFooter>
      )}
    </div>
  );
};
