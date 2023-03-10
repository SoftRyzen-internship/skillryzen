// import { useThemeContext } from 'context/themeContext';
// import { IThemeContext } from 'constans/types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes/routes.const';

import { MainButton } from 'ui-kit';
import { IMAGES } from 'ui-kit/images';

import s from './LogOutStart.module.scss';

interface LogOutStartProps {
  onClick: () => void;
}

export const LogOutStart = ({ onClick }: LogOutStartProps) => {
  // const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <img
        src={IMAGES.LOG_OUT}
        alt='Log Out'
        width='160'
        height='104'
        className={s.image}
      />
      <p className={s.subtitle}>{t('logOutModal.subtitle')}</p>
      <div className={s.btnContainer}>
        <MainButton
          type='button'
          text={t('logOutModal.cancel')}
          onClick={onClick}
          size='small'
          color='blue'
          className={s.cancelBtn}
        />
        <MainButton
          type='button'
          text={t('logOutModal.logOut')}
          onClick={onClick}
          size='small'
          color='blue'
          className={s.logOutBtn}
        />
      </div>
    </div>
  );
};
