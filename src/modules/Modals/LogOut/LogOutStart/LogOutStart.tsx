import { useTranslation } from 'react-i18next';

import { MainButton } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';

import s from './LogOutStart.module.scss';

interface LogOutStartProps {
  onClick: () => void;
  handleClickLogOutBtn: () => void;
}

export const LogOutStart = ({
  onClick,
  handleClickLogOutBtn,
}: LogOutStartProps) => {
  const { t } = useTranslation();

  const onClickLogOutBtn = () => {
    handleClickLogOutBtn();
  };

  return (
    <div className={s.container}>
      <ICONS.LOG_OUT className={s.image} />
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
          onClick={onClickLogOutBtn}
          size='small'
          color='blue'
          className={s.logOutBtn}
        />
      </div>
    </div>
  );
};
