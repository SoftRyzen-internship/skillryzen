import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes/routes.const';
import { RegisterAuthForm } from 'modules/Forms';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const SecondStep = () => {
  const { t } = useTranslation();

  return (
    <div className={s.formWrapper}>
      <h2 className={s.stepTitle}>{t('auth.authTitle')}</h2>
      <p className={s.stepSubtitle}>
        {t('auth.loginLabel')}{' '}
        <NavLink to={ROUTES.LOGIN} className={s.link}>
          {t('auth.loginLink')}
        </NavLink>
      </p>
      <RegisterAuthForm />
    </div>
  );
};
