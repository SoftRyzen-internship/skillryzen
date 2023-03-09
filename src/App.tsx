import { Suspense, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { ThemeContext } from 'context/themeContext';
import { getLocaleStorageItem } from 'utils/getLocaleStorageItem';
import { auth } from 'redux/authSlice/operations';

import { AppRoutes } from 'routes';

import { Theme } from 'constans/types';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';
import './ui-kit/scrollbar.scss';

export const App = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const step = useAppSelector((state) => state.auth.step);
  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>('theme') || 'dark'
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn && step !== 2) {
      dispatch(auth());
    }
  }, [dispatch, isLoggedIn, step]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
