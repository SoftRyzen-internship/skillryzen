import s from './AuthIntro.module.scss';

const introMeta = [
  'Пройти тест з JavaScript',
  'Отримати сертифікат',
  'Оновлене проходження раз у 10 днів',
  'Отримати сертифікат',
  'Отримати сертифікат',
];

export const AuthIntro = () => {
  return (
    <section className={s.section}>
      <div className={`${s.authIntroWrapper} ${s.authIntroBg}`}>
        <ul className={s.introMetaList}>
          {introMeta.map((item) => (
            <li key={item} className={s.introMetaItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
