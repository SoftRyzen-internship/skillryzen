import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { ROUTES } from 'routes/routes.const';
import { setName } from 'redux/authSlice/authSlice';
import { auth } from 'redux/authSlice/operations';

import { RegisterContactsForm } from 'modules/Forms';
import { randomName } from 'utils/randomName';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const FourthStep = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickSkipBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(auth()).then(resp => {
      if (resp.meta.requestStatus === 'fulfilled') {
        dispatch(setName(randomName()));
        navigate(ROUTES.CERTIFICATION, { state: { from: location } });
      }
    });
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
