import React, {createContext, useState} from 'react';


type Theme = 'light' | 'dark';
interface IThemeContext {
    theme: Theme;
    toggleThemeMode: (dark: boolean) => void
}
const ThemeContext = createContext<IThemeContext>({ theme: 'light', toggleThemeMode: (dark: boolean) => {} });

interface ThemeProviderProps {
    children: React.ReactNode
}



function ThemeProvider(props: ThemeProviderProps){
    const [theme, setTheme] = useState<Theme>('light');
    const toggleThemeMode = (dark: boolean) => {
        setTheme(dark ? 'dark' : 'light');
    };
    return (
        <div>  
            <ThemeContext.Provider value={{theme, toggleThemeMode}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
};

export {ThemeProvider, ThemeContext};