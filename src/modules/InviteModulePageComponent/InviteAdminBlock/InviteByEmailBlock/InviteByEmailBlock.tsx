import { useTranslation } from 'react-i18next';

import { InviteAdminByEmailForm } from 'modules/Forms/InviteAdminByEmailForm/InviteAdminByEmailForm';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './InviteByEmailBlock.module.scss';

export const InviteByEmailBlock = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <h3 className={s.title}>{t('invite.invite.email')}</h3>
      <p className={s.description}>{t('invite.description')}</p>
      <InviteAdminByEmailForm />
    </div>
  );
};
