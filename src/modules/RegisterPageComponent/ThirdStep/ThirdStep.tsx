import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { useAppDispatch } from 'hooks/hook';
import { ROUTES } from 'routes/routes.const';

import { RegisterContactsForm } from 'modules/Forms/RegisterContactsForm/RegisterContactsForm';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const ThirdStep = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickSkipBtn = () => {
    navigate(ROUTES.CERTIFICATION);
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>{t('auth.contactTitle')}</h2>
      <p className={s.logIn}>{t('auth.contactLabel')}</p>
      <RegisterContactsForm />
      <button onClick={handleClickSkipBtn} className={s.skipBtn} type='button'>
        {t('auth.skipBtn')}
      </button>
    </div>
  );
};
