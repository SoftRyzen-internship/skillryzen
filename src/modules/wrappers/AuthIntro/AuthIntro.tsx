import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { ROUTES } from 'routes/routes.const';
import { useAppSelector } from 'hooks';
import { getUserRole } from 'redux/authSlice/authSelectors';

import s from './AuthIntro.module.scss';

export const AuthIntro = memo(() => {
  const location = useLocation();
  const role = useAppSelector(getUserRole).toLowerCase();

  const { t } = useTranslation();

  const introMeta = t(`auth.${role}Intro`, { returnObjects: true });

  return location.pathname === ROUTES.REGISTER ? (
    <section className={s.sectionRegister}>
      <div
        className={`${
          role === 'candidate' ? s.authCandidateBg : s.authCompanyBg
        }`}
      >
        <ul className={s.introMetaList}>
          {Object.entries(introMeta).map(item => (
            <li key={item[0]} className={s.introMetaItem}>
              {item[1]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section className={s.sectionLogin}></section>
  );
});

AuthIntro.displayName = 'AuthIntro';
