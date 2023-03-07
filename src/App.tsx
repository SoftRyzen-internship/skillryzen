import { Suspense, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { ThemeContext } from 'context/themeContext';
import { getLocaleStorageItem } from 'services/localStorage';

import { AppRoutes } from 'routes';

import { Theme } from 'modules/common/types';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';
import './ui-kit/scrollbar.scss';

export const App = () => {
  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>('theme') || 'dark'
  );

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      console.log('Should be authorization');
    }
  }, [dispatch, isAuth]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
