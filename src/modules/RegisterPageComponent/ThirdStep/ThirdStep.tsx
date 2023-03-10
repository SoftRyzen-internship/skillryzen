import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from 'hooks/hook';
import { ROUTES } from 'routes/routes.const';
import { setName } from 'redux/authSlice/authSlice';

import { RegisterContactsForm } from 'modules/Forms/RegisterContactsForm/RegisterContactsForm';
import { randomName } from 'utils/randomName';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const ThirdStep = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  randomName();

  const handleClickSkipBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const displayName = randomName();
    dispatch(setName(displayName));

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
