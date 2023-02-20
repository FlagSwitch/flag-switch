import React, { useContext } from 'react';
import { StyledNavbar, StyledNavbarInner, StyledNavbarInnerLeft, StyledNavbarInnerRight, StyledNavbarItem, StyledLogo } from './Navbar.style';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { DarkModeContext } from '../../context/DarkModeContext';
import { UserOutlined, ZhihuOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import imageUrl from '@/assets/jpeg/flagSwitchLarge.jpeg'


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


export const Navbar: React.FC = () => {
  const { theme, toggleThemeMode } = useContext(DarkModeContext);
  return (
    <StyledNavbar>
      <StyledNavbarInner>
        <StyledNavbarInnerLeft>
          <StyledLogo src={imageUrl} />
        </StyledNavbarInnerLeft>
        <StyledNavbarInnerRight>
          <StyledNavbarItem>
          <Dropdown menu={{ items: languageItems }} placement="bottom" arrow trigger={['click']}>
            <ZhihuOutlined />
          </Dropdown>
          </StyledNavbarItem>
          <StyledNavbarItem>
            <DarkModeSwitch
                style={{marginTop: '6px'}}
                checked={theme === 'dark' ? true : false}
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
    </StyledNavbar>
  );
}