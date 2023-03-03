import React, { createContext, useState } from "react";

interface ISidePanelProviderContext {
  open: boolean;
  setOpenSideNavbar: (open: boolean) => void;
}
const SidePanelContext = createContext<ISidePanelProviderContext>({
  open: true,
  setOpenSideNavbar: () => {},
});

interface SidePanelProviderProps {
  children: React.ReactNode;
}

function SidePanelProvider(props: SidePanelProviderProps) {
  const [open, setOpen] = useState<boolean>(false);

  const setOpenSideNavbar = (state: boolean) => {
    setOpen(state);
  };

  return (
    <SidePanelContext.Provider value={{ open, setOpenSideNavbar }}>
      {props.children}
    </SidePanelContext.Provider>
  );
}

export { SidePanelProvider, SidePanelContext };
