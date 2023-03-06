import { Suspense, useState } from 'react';

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
