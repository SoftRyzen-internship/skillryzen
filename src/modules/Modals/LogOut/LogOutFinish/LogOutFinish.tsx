import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import s from './LogOutFinish.module.scss';

interface LogOutFinishProps {
  onClick: () => void;
}

export const LogOutFinish = ({ onClick }: LogOutFinishProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <ICONS.LOG_OUT />
      </div>
      <p className={s.subtitle}>{t('logOutModal.successLogOut')}</p>
    </div>
  );
};
