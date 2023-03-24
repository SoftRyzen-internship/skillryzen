import { createContext, useContext } from 'react';

export const AdavtipeSideBarContext = createContext(null);
export const useAdavtipeSideBarContext = () =>
  useContext(AdavtipeSideBarContext);
