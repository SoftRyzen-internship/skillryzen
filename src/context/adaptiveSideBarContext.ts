import { createContext, useContext } from 'react';

export const AdaptiveSideBarContext = createContext(null);
export const useAdaptiveSideBarContext = () =>
  useContext(AdaptiveSideBarContext);
