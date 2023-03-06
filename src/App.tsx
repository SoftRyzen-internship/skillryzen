import { Suspense, useState } from 'react';

import { ThemeContext } from 'context/themeContext';
import { getLocaleStorageItem } from 'services/localStorage';

import { AppRoutes } from 'routes';

import { Theme } from 'modules/common/types';

import { Modal } from 'ui-kit/components/Modal/Modal';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';

export const App = () => {
  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>('theme') || 'dark'
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* <Modal onClick={() => console.log('modal')} text='modal' /> */}
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
