import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes/routes.const';
import { LoginForm } from 'modules/Forms';

import s from './Login.module.scss';
import { Logo } from 'ui-kit';

export const Login = () => {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <Logo content='SkillRyzen' />
      <h2 className={s.formTitle}>{t('auth.loginTitle')}</h2>
      <p className={s.logIn}>
        {t('auth.registerLabel')}{' '}
        <NavLink to={ROUTES.REGISTER} className={s.link}>
          {t('auth.registerLink')}
        </NavLink>
      </p>
      <LoginForm />
    </section>
  );
};
