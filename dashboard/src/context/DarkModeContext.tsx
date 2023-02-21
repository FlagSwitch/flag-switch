import React, {createContext, useState} from 'react';


type Theme = 'light' | 'dark';
interface IDarkModeContext {
    theme: Theme;
    toggleThemeMode: (dark: boolean) => void
}
const DarkModeContext = createContext<IDarkModeContext>({ theme: 'light', toggleThemeMode: (dark: boolean) => {} });

interface DarkModeProviderProps {
    children: React.ReactNode
}



function DarkModeProvider(props: DarkModeProviderProps){
    const [theme, setTheme] = useState<Theme>('light');
    const toggleThemeMode = (dark: boolean) => {
        setTheme(dark ? 'dark' : 'light');
    };
    return ( 
            <DarkModeContext.Provider value={{theme, toggleThemeMode}}>
                {props.children}
            </DarkModeContext.Provider>
    )
};

export {DarkModeProvider, DarkModeContext};