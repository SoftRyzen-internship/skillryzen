import { Theme } from 'constans/types';
import { useTranslation } from 'react-i18next';

import { Tag } from 'ui-kit/index';

import s from './TestCard.module.scss';

interface Card {
  size: 'large' | 'small';
  item: Item;
  className?: string;
  theme?: Theme;
}

interface Item {
  title: string;
  author: string;
  text: string;
  fields: string[];
  number: number;
  time: number;
  testStatus?: string;
}

export const TestCard = ({
  size,
  item,
  className = '',
  theme = 'dark',
}: Card) => {
  const { t } = useTranslation();

  const { title, author, text, fields, number, time, testStatus } = item;

  return (
    <div
      className={`${s[`card--${size}`]} ${s[`card--${theme}`]} ${className}`}
    >
      <div>
        <p className={s.card__author}>{author}</p>
        <div className={s.card__content}>
          <p className={`${s.card__title} ${s[`card__title--${theme}`]}`}>
            {title}
          </p>
          <p className={`${s.card__text} ${s[`card__text--${theme}`]}`}>
            {text}
          </p>
        </div>
      </div>
      <div className={s.card__wrapper}>
        <div className={s.card__listWrapper}>
          <ul className={s.card__list}>
            {fields.map((item, index) => (
              <li key={index}>
                <Tag type='field' label={item} theme={theme} />
              </li>
            ))}
          </ul>
        </div>
        <div className={s.card__addWrapper}>
          <div className={s.card__number}>
            <Tag
              type='number'
              theme={theme}
              label={number + ' ' + t('testsMain.numberOfQuestions')}
            />
          </div>
          <div className={s.card__time}>
            <Tag type='time' label={time + ''} theme={theme} />
          </div>
          <div>
            <Tag type='number' label={testStatus} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};
