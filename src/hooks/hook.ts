import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { createContext, useContext} from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const SideBarContext = createContext(null);
export const UseSideBarContext = () => useContext(SideBarContext);
