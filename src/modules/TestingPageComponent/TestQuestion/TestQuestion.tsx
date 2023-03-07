import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { AuthButton, RadioButton } from 'ui-kit';
import { IThemeContext } from 'modules/common/types';

import {
  answerTest,
  finishTest,
} from 'redux/testingInfo/testingInfoOperations';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { useThemeContext } from 'context/themeContext';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';

import { ROUTES } from 'routes/routes.const';

import s from './TestQuestion.module.scss';
import { getTimeTest } from 'redux/testingInfo/testingInfoSelectors';

export const TestQuestion = () => {
  const { testId, questionId, title, possibleAnswers, isLoading } =
    useAppSelector((state) => state.testingInfo);
  const time = useAppSelector(getTimeTest);

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const { theme }: IThemeContext = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAnswer = () => {
    dispatch(answerTest({ testId, questionId, selectedAnswer }));
  };

  useEffect(() => {
    setSelectedAnswer('');
  }, [questionId]);

  useEffect(() => {
    if (!time) return;
    dispatch(finishTest({ testId, time: new Date() }));
    navigate(ROUTES.TEST_END);
  }, [time]);

  return (
    <div className={s.testWrapper}>
      <h2 className={`${s.testTitle} ${s[`testTitle--${theme}`]}`}>{title}</h2>
      <h2
        className={
          isLoading
            ? s.testTitleHidden
            : `${s.testTitle} ${s[`testTitle--${theme}`]}`
        }
      >
        {title}
      </h2>
      <div className={s.questionWrapper}>
        {/* <div className={s.questionCode}>Code</div> */}
        <ul className={s.questionList}>
          {possibleAnswers &&
            !isLoading &&
            possibleAnswers.map((answer, index) => (
              <li key={index}>
                <RadioButton
                  theme={theme}
                  state={selectedAnswer === answer.label && 'checked'}
                  type='PassTest'
                  name='answers'
                  value={answer.label}
                  checked={selectedAnswer === answer.label}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  label={answer.value}
                />
              </li>
            ))}
          {isLoading && <Skeleton length={4} value='skeleton' />}
        </ul>
      </div>
      {questionId && (
        <div className={isLoading ? s.buttonWrapperHidden : s.buttonWrapper}>
          <AuthButton
            type='button'
            text='Answer'
            onClick={handleAnswer}
            size='small'
            color='blue'
            disabled={!selectedAnswer || isLoading}
          />
        </div>
      )}
    </div>
  );
};

// Ця логіка на демо-версію

// type State = 'checked' | 'wrong' | 'right' | '';

// const [sendAnswer, setSendAnswer] = useState<string | null>(null);

// const chooseState = (value: string): State => {
//   if (
//     (sendAnswer && sendAnswer === value && rightAnswer === value) ||
//     (sendAnswer && rightAnswer === value)
//   ) {
//     return 'right';
//   } else if (sendAnswer && sendAnswer === value) {
//     return 'wrong';
//   } else if (!sendAnswer && selectedAnswer === value) {
//     return 'checked';
//   } else {
//     return '';
//   }
// };

// state={chooseState(answer.value)}
