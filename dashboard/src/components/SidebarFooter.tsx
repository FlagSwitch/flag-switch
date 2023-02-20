import styled from '@emotion/styled';
import React from 'react';

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
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
        </StyledSidebarFooter>
      )}
    </div>
  );
};
