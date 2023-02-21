import React, {createContext, useState} from 'react';


interface ISidePanelProviderContext {
    collapsed: boolean;
    toggleCollapse: () => void
}
const SidePanelContext = createContext<ISidePanelProviderContext>({ collapsed: false, toggleCollapse: () => {} });

interface SidePanelProviderProps {
    children: React.ReactNode
}



function SidePanelProvider(props: SidePanelProviderProps){
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }
    
    return ( 
            <SidePanelContext.Provider value={{collapsed, toggleCollapse}}>
                {props.children}
            </SidePanelContext.Provider>
    )
};

export { SidePanelProvider, SidePanelContext };