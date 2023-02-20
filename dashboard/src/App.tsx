import { useContext } from 'react';
import {Playground} from './Playground';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { DarkModeContext } from './context/DarkModeContext';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import 'antd/dist/reset.css';

function App() {
  const { theme } = useContext(DarkModeContext);
  const isDarkTheme = theme === "dark";
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App" style={{ height: '100vh'}}>
        <Header></Header>
        <Playground />
      </div>
    </ThemeProvider>
  )
}

export default App
