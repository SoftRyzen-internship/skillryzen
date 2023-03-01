import { Suspense, useState } from 'react';

import { ThemeContext } from 'context/themeContext';
import { getLocaleStorageItem } from 'services/localStorage';

import { AppRoutes } from 'routes';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';
import { Theme, IThemeContext } from 'modules/common/types';

export const App = () => {
  const initTheme = (): Theme => {
    const valueTheme = getLocaleStorageItem<Theme>('theme');

    if (valueTheme) return valueTheme;
    localStorage.setItem('theme', '"dark"');
    return valueTheme;
  };

  const [theme, setTheme] = useState(initTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
