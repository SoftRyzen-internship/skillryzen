import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router';
import { useLocation, NavLink } from 'react-router-dom';

import { ROUTES } from 'routes/routes.const';

import { RegisterContactsForm } from 'modules/Forms/RegisterContactsForm/RegisterContactsForm';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const ThirdStep = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickSkipBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(ROUTES.CERTIFICATION, { state: { from: location } });
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.stepTitle}>{t('auth.contactTitle')}</h2>
      <p className={s.stepSubtitle}>{t('auth.contactLabel')}</p>
      <RegisterContactsForm />
      <a href='#' onClick={handleClickSkipBtn} className={s.skip}>
        {t('auth.skipBtn')}
      </a>
    </div>
  );
};
