import s from './AuthIntro.module.scss';

import { IAuth } from 'modules/common/types';

const introMeta = {
  company: [
    'Пройти тест з JavaScript',
    'Отримати сертифікат',
    'Оновлене проходження раз у 10 днів',
    'Отримати сертифікат',
    'Отримати',
  ],
  candidate: [
    'Створення власних тестів',
    'Необмежена кількість учасників',
    'Можливість надавати доступ до команди',
    'Видача сертифікатів',
    'Отримання зворотнього зв’язку від учасників',
  ],
};

export const AuthIntro = ({ role }: IAuth) => {
  return (
    <section className={s.section}>
      <div
        className={`${s.authIntroWrapper} ${
          role === 'candidate' ? s.authCandidateBg : s.authCompanyBg
        }`}
      >
        <ul className={s.introMetaList}>
          {introMeta.candidate.map((item, idx) => (
            <li key={idx} className={s.introMetaItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
