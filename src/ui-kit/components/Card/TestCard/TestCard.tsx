import { Theme } from 'constants/types';
import { useTranslation } from 'react-i18next';

import { Tag } from 'ui-kit/index';
import { ICONS } from 'ui-kit/icons';

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
  testStatus?: 'disabled' | 'available' | 'tryAgain' | 'done' | 'failed';
  testDate?: string;
  attempts?: number | string;
  availableIn?: string;
  percentageOfCorrectAnswers?: number;
}

export const TestCard = ({
  size,
  item,
  className = '',
  theme = 'dark',
}: Card) => {
  const { t } = useTranslation();

  const {
    title,
    author,
    text,
    fields,
    number,
    time,
    testStatus,
    availableIn,
    percentageOfCorrectAnswers,
    attempts,
    testDate,
  } = item;

  const statusObject = {
    disabled: {
      className: `${s.disabled}`,
      text: `${availableIn}`,
    },
    available: {
      className: `${s.available}`,
      text: 'Available',
    },
    tryAgain: {
      className: `${s.tryAgain}`,
      text: 'Try again',
    },
    done: { className: `${s.done}`, text: 'Done' },
    failed: {
      className: `${s.failed}`,
      text: 'Failed',
    },
  };

  return (
    <div
      className={`${s[`card--${size}`]} ${s[`card--${theme}`]} ${className} ${
        testStatus === 'disabled' && s.cardLargeDisabled
      }`}
    >
      <div>
        <p className={`${s.card__author} ${s[`card__author--${theme}`]}`}>
          {author}
        </p>
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
                <Tag
                  type='field'
                  label={item}
                  theme={theme}
                  testStatus={testStatus}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={s.card__addInfoWrapper}>
          <div className={s.card__addWrapper}>
            <div className={s.card__number}>
              <Tag
                type='number'
                theme={theme}
                label={number + ' ' + t('testsMain.numberOfQuestions')}
                testStatus={testStatus}
              />
            </div>
            <div className={s.card__time}>
              <Tag
                type='time'
                label={time + ''}
                theme={theme}
                testStatus={testStatus}
              />
            </div>
          </div>
          {(testStatus === 'done' || testStatus === 'failed') && (
            <div className={s[`card__timeInfo--${testStatus}`]}>
              <p className={s.card__attempts}>{attempts}</p>
              <p className={s.card__date}>{testDate}</p>
            </div>
          )}
        </div>
      </div>
      <div className={statusObject[testStatus].className}>
        {testStatus === 'tryAgain' && (
          <ICONS.REFRESH
            className={size === 'large' ? s.iconLarge : s.iconSmall}
          />
        )}
        {(testStatus === 'done' || testStatus === 'failed') && (
          <p className={s.card__percentageOfCorrectAnswers}>
            {percentageOfCorrectAnswers + '%'}
          </p>
        )}
        <p>{statusObject[testStatus].text}</p>
      </div>
    </div>
  );
};
