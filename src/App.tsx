import { Suspense, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { ThemeContext } from 'context/themeContext';
import { getLocaleStorageItem } from 'utils/getLocaleStorageItem';
import { auth } from 'redux/authSlice/operations';

import { Spinner } from 'ui-kit/components/Spinner/Spinner';

import { AppRoutes } from 'routes';

import { Theme } from 'constans/types';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';
import './ui-kit/scrollbar.scss';

export const App = () => {
  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>('theme') || 'dark'
  );

  const email = useAppSelector((state) => state.auth.user.email);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth && !email) {
      dispatch(auth());
    }
  }, [isAuth, dispatch, email]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<Spinner />}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
