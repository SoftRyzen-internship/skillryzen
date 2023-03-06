import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';

import { RegisterContactsForm } from 'modules/Forms/RegisterContactsForm/RegisterContactsForm';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const ThirdStep = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const handleClickSkipBtn = () => {
    dispatch(setStep(4));
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
