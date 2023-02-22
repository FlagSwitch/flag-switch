import React, { useContext } from 'react';
import { Layout, theme, ConfigProvider } from 'antd';
import { DarkModeContext } from './context/DarkModeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNavbar from './components/SideNavbar';
import ContentFrame from './components/ContentFrame';

const App: React.FC = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { theme: darkTheme } = useContext(DarkModeContext);
  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: 'Roboto',
        colorPrimary: '#373E95',
      },
      algorithm: darkTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
    }}>
      <Layout style={{ height: '100%'}}>
        <SideNavbar/>
        <Layout className="site-layout">
          <Header/>
          <ContentFrame/>
          <Footer/>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;