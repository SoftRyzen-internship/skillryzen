import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes/routes.const';
import { LoginForm } from 'modules/Forms';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setStep } from 'redux/authSlice/authSlice';

import s from './Login.module.scss';
import { Logo } from 'ui-kit';
import { useEffect } from 'react';

export const Login = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const step = useAppSelector(state => state.auth.step);

  useEffect(() => {
    if (step !== 1) {
      dispatch(setStep(1));
    }
  }, [dispatch, step]);

  return (
    <section className={s.section}>
      <div className={s.logo}>
        <Logo content='SkillRyzen' />
      </div>
      <h2 className={s.loginTitle}>{t('auth.loginTitle')}</h2>
      <LoginForm />
      <p className={s.loginSubtitle}>
        {t('auth.registerLabel')}{' '}
        <NavLink to={ROUTES.REGISTER} className={s.link}>
          {t('auth.registerLink')}
        </NavLink>
      </p>
    </section>
  );
};
