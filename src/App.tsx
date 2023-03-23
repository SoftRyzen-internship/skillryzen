import { Suspense, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { ThemeContext } from 'context/themeContext';
import { AdavtipeSideBarContext } from 'context/adavtipeSideBarContext';
import { getLocaleStorageItem } from 'utils/getLocaleStorageItem';
import { auth } from 'redux/authSlice/operations';
import { setName } from 'redux/authSlice/authSlice';
import { randomName } from 'utils/randomName';
import { getUserEmail, getIsAuth } from 'redux/authSlice/authSelectors';

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
  const [showSideBar, setShowSideBar] = useState(false);

  const email = useAppSelector(getUserEmail);
  const isAuth = useAppSelector(getIsAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth && !email) {
      dispatch(setName(randomName()));
      dispatch(auth());
    }
  }, [isAuth, dispatch, email]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AdavtipeSideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
        <Suspense fallback={<Spinner className='spinnerPosition' />}>
          <AppRoutes />
        </Suspense>
      </AdavtipeSideBarContext.Provider>
    </ThemeContext.Provider>
  );
};
