import { useTranslation } from 'react-i18next';

import { InviteAdminByEmailForm } from 'modules/Forms/InviteAdminByEmailForm/InviteAdminByEmailForm';
import { InviteStudentByEmailForm } from 'modules/Forms/InviteStudentByEmailForm/InviteStudentByEmailForm';

import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';

import s from './InviteByEmail.module.scss';

interface Props {
  userType: string;
}

export const InviteByEmail = ({ userType }: Props) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div
      className={`${s.wrapper} ${s[`wrapper--${userType}`]} ${
        s[`wrapper--${theme}`]
      }`}
    >
      <h3 className={s.title}>{t('invite.invite.email')}</h3>
      <p className={s.description}>{t('invite.description')}</p>
      {userType === 'admin' ? (
        <InviteAdminByEmailForm />
      ) : (
        <InviteStudentByEmailForm />
      )}
    </div>
  );
};
