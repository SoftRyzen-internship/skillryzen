import { Suspense, useState } from 'react';

import { ThemeContext } from 'context/themeContext';
import { getLocaleStorageItem } from 'services/localStorage';

import { AppRoutes } from 'routes';

import { Theme } from 'modules/common/types';

import { Modal } from 'ui-kit/components/Modal/Modal';

import { IMAGES } from 'ui-kit/images';
import { ICONS } from 'ui-kit/icons';
import s from './App.module.scss';
import { AuthButton } from 'ui-kit';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';

export const App = () => {
  const [theme, setTheme] = useState(
    () => getLocaleStorageItem<Theme>('theme') || 'dark'
  );

  const [isShowModal, setIsShowModal] = useState(false);

  const handleClickModal = () => {
    setIsShowModal((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Modal
        onClick={handleClickModal}
        title1={{ text: 'Вітаємо, ', className: `${s.title}` }}
        title2={{
          text: 'ви успішно зареєструвались в системі!',
          className: `${s.titleRest}`,
        }}
        subtitle={{
          text: 'Рекомендуємо перейти в профіль та ',
          className: `${s.subtitle}`,
        }}
        link={{ text: 'налаштувати персональні дані', className: `${s.link}` }}
        image={{
          src: `${IMAGES.DONE}`,
          alt: 'Done registration',
          width: '220',
          height: '150',
          className: `${s.image}`,
        }}
        icon={<ICONS.CROSS_SMALL />}
        button={
          <AuthButton
            type='button'
            text='OK'
            onClick={handleClickModal}
            size='small'
            color='blue'
            className={s.modalBtn}
          />
        }
      />
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </ThemeContext.Provider>
  );
};
