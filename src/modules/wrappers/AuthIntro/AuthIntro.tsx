import { useLocation } from 'react-router';

import { ROUTES } from 'routes/routes.const';
import { useAppSelector } from 'hooks/hook';

import s from './AuthIntro.module.scss';

interface IntroMeta {
  [key: string]: string[];
}

const introMeta: IntroMeta = {
  candidate: [
    'Пройти тест з JavaScript',
    'Отримати сертифікат',
    'Оновлене проходження раз у 10 днів',
    'Отримати сертифікат',
    'Отримати',
  ],
  company: [
    'Створення власних тестів',
    'Необмежена кількість учасників',
    'Можливість надавати доступ до команди',
    'Видача сертифікатів',
    'Отримання зворотнього зв’язку від учасників',
  ],
};

export const AuthIntro = () => {
  const location = useLocation();
  const role = useAppSelector((state) => state.auth.role);

  return location.pathname === ROUTES.REGISTER ? (
    <section className={s.sectionRegister}>
      <div
        className={`${
          role === 'candidate' ? s.authCandidateBg : s.authCompanyBg
        }`}
      >
        <ul className={s.introMetaList}>
          {introMeta[role].map((item, idx) => (
            <li key={idx} className={s.introMetaItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section className={s.sectionLogin}></section>
  );
};
