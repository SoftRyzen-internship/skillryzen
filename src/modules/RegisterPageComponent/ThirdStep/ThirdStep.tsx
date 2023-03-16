import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { ROUTES } from 'routes/routes.const';
import { setName } from 'redux/authSlice/authSlice';
import { auth } from 'redux/authSlice/operations';
import { getUserRole } from 'redux/authSlice/authSelectors';

import { RegisterContactsForm, RegisterCompanyForm } from 'modules/Forms';
import { randomName } from 'utils/randomName';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const ThirdStep = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const role = useAppSelector(getUserRole);

  const handleClickSkipBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(auth()).then((resp) => {
      if (resp.meta.requestStatus === 'fulfilled') {
        dispatch(setName(randomName()));
        navigate(ROUTES.CERTIFICATION, { state: { from: location } });
      }
    });
  };

  return (
    <div className={s.formWrapper}>
      {role === 'CANDIDATE' ? (
        <>
          <h2 className={s.stepTitle}>{t('auth.contactTitle')}</h2>
          <p className={s.stepSubtitle}>{t('auth.contactLabel')}</p>
          <RegisterContactsForm />
          <a href='#' onClick={handleClickSkipBtn} className={s.skip}>
            {t('auth.skipBtn')}
          </a>
        </>
      ) : (
        <>
          <h2 style={{ maxWidth: '374px' }} className={s.stepTitle}>
            {t('auth.companyTitle')}
          </h2>
          <p className={s.stepSubtitle}>{t('auth.companySubtitle')}</p>
          <RegisterCompanyForm />
        </>
      )}
    </div>
  );
};
