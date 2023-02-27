import React, { useEffect, useState } from 'react';

// @ts-ignore
import s from './ProgressBar.module.scss';

interface IAnswer {
  number: number;
  isRight: boolean;
}

interface IProps {
  currentNumber: number;
  totalNumber: number;
  isPrevRight: boolean;
}

export const ProgressBar = ({
  currentNumber,
  totalNumber,
  isPrevRight,
}: IProps) => {
  const array = [...Array(totalNumber)].fill(1).map((item, index) => index + 1);
  const [arrayOfAnswers, setArrayOfAnswers] = useState<IAnswer[]>([]);

  useEffect(() => {
    if (currentNumber === 1) return;
    setArrayOfAnswers((prevState) => [
      ...prevState,
      { number: currentNumber - 1, isRight: isPrevRight },
    ]);
  }, [currentNumber]);

  const checkRightAnswer = (item: number) => {
    // if (item > arrayOfAnswers.length || arrayOfAnswers.length === 0) return '';
    const foundItem = arrayOfAnswers.find((answer) => answer.number === item);
    if (!foundItem) return;
    if (foundItem.isRight) return 'progressBar__line--right';
    return 'progressBar__line--false';
  };

  return (
    <div className={s.progressBar}>
      <p className={s.progressBar__info}>
        Question {currentNumber}/{totalNumber}
      </p>
      <ul className={s.progressBar__list}>
        {array.map((item) => (
          <li
            key={item}
            className={`${s.progressBar__line} ${
              s[`${checkRightAnswer(item)}`]
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
