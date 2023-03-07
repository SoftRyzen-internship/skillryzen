import { Suspense, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { ThemeContext } from 'context/themeContext';
import { getLocaleStorageItem } from 'services/localStorage';
import { auth } from 'redux/authSlice/operations';

import { AppRoutes } from 'routes';

import { Theme } from 'modules/common/types';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';
import './ui-kit/scrollbar.scss';

export const App = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>('theme') || 'dark'
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(auth());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
