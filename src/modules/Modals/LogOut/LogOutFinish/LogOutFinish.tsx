// import { useThemeContext } from 'context/themeContext';
// import { IThemeContext } from 'constans/types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes/routes.const';

import { MainButton } from 'ui-kit';
import { IMAGES } from 'ui-kit/images';

import s from './LogOutFinish.module.scss';

interface LogOutFinishProps {
  onClick: () => void;
}

export const LogOutFinish = ({ onClick }: LogOutFinishProps) => {
  // const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img
          src={IMAGES.HAND}
          alt='Hand'
          width='74'
          height='55'
          className={s.imageHand}
        />
        <img
          src={IMAGES.STAR}
          alt='Star'
          width='81'
          height='77'
          className={s.imageStar}
        />
        <img
          src={IMAGES.HEART}
          alt='Heart'
          width='62'
          height='56'
          className={s.imageHeart}
        />
      </div>
      <p className={s.subtitle}>{t('logOutModal.successLogOut')}</p>
    </div>
  );
};
