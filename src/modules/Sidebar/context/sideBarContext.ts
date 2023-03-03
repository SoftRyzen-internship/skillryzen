import { createContext, useContext } from 'react';

export const SideBarContext = createContext(null);
export const UseSideBarContext = () => useContext(SideBarContext);
