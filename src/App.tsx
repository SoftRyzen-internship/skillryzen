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
  const displayName = useAppSelector((state) => state.auth.user.displayName);
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>('theme') || 'dark'
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth && !displayName) {
      dispatch(auth());
    }
  }, [isAuth, dispatch, displayName]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
