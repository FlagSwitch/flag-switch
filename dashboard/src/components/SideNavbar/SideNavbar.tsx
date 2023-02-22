import React, { useContext } from 'react';
import Menu from '../Menu';
import { SidePanelContext } from '../../context/SidePanelContext';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Layout } from 'antd';
import smallImageSrc from '../../assets/jpeg/flagSwitchSmall.jpeg';
import largeImageSrc from '../../assets/jpeg/flagSwitchLarge.jpeg';
import { StyledImageContainer, StyledSmallLogo, StyledBigLogo } from './SideNavbar.style'

const { Sider } = Layout;

export const SideNavbar: React.FC = () => {
    const { collapsed } = useContext(SidePanelContext);
    const { theme: darkTheme } = useContext(DarkModeContext);
    return (
        <Sider theme={darkTheme} trigger={null} collapsible collapsed={collapsed}>
          <StyledImageContainer>
            { collapsed ? <StyledSmallLogo src={smallImageSrc}/> : <StyledBigLogo src={largeImageSrc}/> }
          </StyledImageContainer>
          <Menu/>
        </Sider>
    )
};