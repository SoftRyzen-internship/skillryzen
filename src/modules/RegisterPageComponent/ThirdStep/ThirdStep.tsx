import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'routes/routes.const';

import { RegisterContactsForm } from 'modules/Forms/RegisterContactsForm/RegisterContactsForm';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const ThirdStep = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={s.formWrapper}>
      <h2 className={s.stepTitle}>{t('auth.contactTitle')}</h2>
      <p className={s.stepSubtitle}>{t('auth.contactLabel')}</p>
      <RegisterContactsForm />
      <NavLink to={ROUTES.CERTIFICATION} className={s.skip}>
        {t('auth.skipBtn')}
      </NavLink>
    </div>
  );
};
