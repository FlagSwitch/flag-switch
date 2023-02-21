import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {
  BarChartOutlined,
  ProjectOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, ConfigProvider, Card } from 'antd';
import styled from 'styled-components';
import { SidePanelContext } from './context/SidePanelContext';
import { DarkModeContext } from './context/DarkModeContext';
import Header from './components/Header';
import smallImageSrc from './assets/jpeg/flagSwitchSmall.jpeg';
import largeImageSrc from './assets/jpeg/flagSwitchLarge.jpeg';
import { Outlet } from "react-router-dom";
import { MenuInfo } from 'rc-menu/lib/interface';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'


export const StyledImageContainer = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 5px 15px;
`;


export const StyledSmallLogo = styled.img`
    width: 45px;
    min-width: 45px;
    height: 45px;
    min-height: 45px;
    border-radius: 8px;
`;

export const StyledBigLogo = styled.img`
    width: 120px;
    min-width: 120px;
    height: 45px;
    min-height: 45px;
    border-radius: 8px;
`;

const { Sider, Content } = Layout;

const App: React.FC = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { theme: darkTheme } = useContext(DarkModeContext);
  const { collapsed } = useContext(SidePanelContext);
  const navigate = useNavigate();

  const onMenuSelect = (menuInfo: MenuInfo) => {
    navigate(menuInfo.key);
  }
 
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#373E95',
      },
      algorithm: darkTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
    }}>
      <Layout style={{ height: '100%'}}>
        <Sider theme={darkTheme} trigger={null} collapsible collapsed={collapsed}>
          <StyledImageContainer>
            { collapsed ? <StyledSmallLogo src={smallImageSrc}/> : <StyledBigLogo src={largeImageSrc}/> }
          </StyledImageContainer>
          
          <Menu
            onSelect={onMenuSelect}
            theme={darkTheme}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: 'overview',
                icon: <BarChartOutlined />,
                label: 'Overview',
              },
              {
                key: 'projects',
                icon: <ProjectOutlined />,
                label: 'Projects',
              },
              {
                key: 'users',
                icon: <TeamOutlined />,
                label: 'Users',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header/>
          <Breadcrumbs />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          > 
            <Card style={{ width: '100%', height: '100%' }}>
              <Outlet/>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;