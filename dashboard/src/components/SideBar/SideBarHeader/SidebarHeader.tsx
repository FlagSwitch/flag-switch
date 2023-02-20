import React from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { Typography } from '../../Typography';
import { StyledSidebarHeader, StyledLogo} from './SideBarHeader.style';
import imageUrl from '@/assets/jpeg/flagSwitchSmall.jpeg'

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, ...rest }) => {
  const { rtl, collapseSidebar } = useProSidebar();
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo src={imageUrl} rtl={rtl} onClick={() => collapseSidebar()} />
        <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
          Flag Switch
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
