import React, { useContext } from 'react';
import { Layout, Button, theme, Dropdown } from 'antd';
import {  StyledNavbarItem, StyledNavbarInner, StyledNavbarInnerLeft, StyledNavbarInnerRight } from './Header.style';
import { UserOutlined, ZhihuOutlined, MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { SidePanelContext } from '../../context/SidePanelContext';
import { DarkModeContext } from '../../context/DarkModeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


import type { MenuProps } from 'antd';
const { Header: AntHeader} = Layout;

const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  
  const languageItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          English
        </a>
      ),
    },
  ];


export const Header: React.FC = () => {
const {
    token: { colorBgContainer },
    } = theme.useToken();
  const { collapsed, toggleCollapse } = useContext(SidePanelContext);
  const { theme: darkTheme, toggleThemeMode } = useContext(DarkModeContext);
  return (
    <AntHeader style={{ padding: 0, background: colorBgContainer }}>
        <StyledNavbarInner>
            <StyledNavbarInnerLeft>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    style: { fontSize: '150%'},
                    onClick: () => toggleCollapse(),
                })}
            </StyledNavbarInnerLeft>
            <StyledNavbarInnerRight>
            <StyledNavbarItem>
            <Dropdown menu={{ items: languageItems }} placement="bottom" arrow trigger={['click']}>
                <Button type="primary" icon={<ZhihuOutlined />} />
            </Dropdown>
            </StyledNavbarItem>
            <StyledNavbarItem>
                <DarkModeSwitch
                    style={{marginTop: '10px'}}
                    checked={darkTheme === 'dark'}
                    onChange={toggleThemeMode}
                    sunColor="#0098e5"
                    moonColor='#59d0ff'
                    size={20}
                />
            </StyledNavbarItem>
            <StyledNavbarItem>
                <Dropdown arrow menu={{ items }} trigger={['click']}>
                <Button type="primary" icon={<UserOutlined />} />
                </Dropdown>
            </StyledNavbarItem>
            </StyledNavbarInnerRight>
      </StyledNavbarInner>
    </AntHeader>
  );
}