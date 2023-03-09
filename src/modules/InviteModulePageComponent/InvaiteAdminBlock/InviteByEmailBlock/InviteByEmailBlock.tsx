import { InviteAdminByEmailForm } from 'modules/Forms/InviteAdminByEmailForm/InviteAdminByEmailForm';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './InviteByEmailBlock.module.scss';

export const InviteByEmailBlock = () => {
  const { theme }: IThemeContext = useThemeContext();
  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <h3 className={s.title}>Invite by email</h3>
      <p className={s.description}>
        JavaScript is a programming language that is one of the core
        technologies of the World Wide Web, alongside HTML and CSS.{' '}
      </p>
      <InviteAdminByEmailForm />
    </div>
  );
};
