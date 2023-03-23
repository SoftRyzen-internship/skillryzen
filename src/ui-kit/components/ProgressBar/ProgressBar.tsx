import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { createArray } from 'utils/createArray';
import { ICONS } from 'ui-kit/icons';
import { Theme } from 'constans/types';
import { useAppSelector } from 'hooks';
import {
  getQuestionNumber,
  getTotalCount,
} from 'redux/testingInfo/testingInfoSelectors';

import s from './ProgressBar.module.scss';

interface Props {
  theme?: Theme;
}

export const ProgressBar = ({ theme = 'dark' }: Props) => {
  const [array, setArray] = useState<number[]>([]);
  const number = useAppSelector(getQuestionNumber);
  const total = useAppSelector(getTotalCount);
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!total) return;
    setArray(createArray(total));
    // eslint-disable-next-line
  }, [total]);

  return (
    <div className={s.progressBar}>
      {pathname !== '/testing/test-end' && array?.length > 0 && (
        <>
          <p
            className={`${s.progressBar__info} ${
              s[`progressBar__info--${theme}`]
            }`}
          >
            {t('testing.question')} {number}/{total}
          </p>
          <div className={s.progressBar__wrapper}>
            <ul className={s.progressBar__list}>
              {array.map(item => (
                <li
                  key={item}
                  className={`${s[`progressBar__line--${theme}`]} ${
                    item < number && s['progressBar__line--done']
                  } ${item === number && s['progressBar__line--current']}`}
                ></li>
              ))}
            </ul>
            <ICONS.FLAG_ONE
              className={`${s[`progressBar__icon--${theme}`]} ${
                number > total && s.progressBar__iconFinish
              }`}
            />
          </div>
        </>
      )}
    </div>
  );
};

// для демо-версії

// interface Answer {
//   number: number;
//   isRight: boolean;
// }

// const [arrayOfAnswers, setArrayOfAnswers] = useState<Answer[]>([]);

// useEffect(() => {
//   if (currentNumber === 1) return;
//   setArrayOfAnswers((prevState) => [
//     ...prevState,
//     { number: currentNumber - 1, isRight: isPrevRight },
//   ]);
// }, [currentNumber, isPrevRight]);

// const checkRightAnswer = (item: number) => {
//   if (item > arrayOfAnswers.length || arrayOfAnswers.length === 0) return '';
//   const foundItem = arrayOfAnswers.find((answer) => answer.number === item);
//   if (!foundItem) return;
//   if (foundItem.isRight) return 'progressBar__line--right';
//   return 'progressBar__line--false';
// };

// className={`${s.progressBar__line} ${
//   s[`${checkRightAnswer(item)}`]
// }`}
