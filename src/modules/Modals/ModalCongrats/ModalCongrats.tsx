import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes/routes.const';

import { MainButton } from 'ui-kit';
import { IMAGES } from 'ui-kit/images';

import s from './ModalCongrats.module.scss';

interface ModalCongratsProps {
  onClick: () => void;
}

export const ModalCongrats = ({ onClick }: ModalCongratsProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <img
        src={IMAGES.DONE}
        alt='Done registration'
        width='99'
        height='84'
        className={s.image}
      />
      <p className={theme === 'dark' ? s.titleDark : s.titleLight}>
        {t('modalCongrats.title1')}
      </p>
      <p className={theme === 'dark' ? s.titleRestDark : s.titleRestLight}>
        {t('modalCongrats.title2')}
      </p>
      <p className={theme === 'dark' ? s.subtitleDark : s.subtitleLight}>
        {t('modalCongrats.subtitle')}
        <span>
          <Link className={s.link} to={ROUTES.PROFILE} onClick={onClick}>
            {t('modalCongrats.link')}
          </Link>
        </span>
      </p>
      <div className={s.btnContainer}>
        <MainButton
          type='button'
          text='OK'
          onClick={onClick}
          size='small'
          color='blue'
          className={s.modalBtn}
        />
      </div>
    </div>
  );
};
