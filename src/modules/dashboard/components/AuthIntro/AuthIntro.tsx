import { useAppSelector } from 'hooks/hook';

import s from './AuthIntro.module.scss';

const meta = {
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
  const role = useAppSelector((state) => state.auth.role);
  const introMeta = role === 'candidate' ? meta.candidate : meta.company;

  return (
    <section className={s.section}>
      <div
        className={`${
          role === 'candidate' ? s.authCandidateBg : s.authCompanyBg
        }`}
      >
        <ul className={s.introMetaList}>
          {introMeta.map((item, idx) => (
            <li key={idx} className={s.introMetaItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
