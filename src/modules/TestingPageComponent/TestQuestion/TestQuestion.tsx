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

import s from './TestQuestion.module.scss';

export const TestQuestion = () => {
  const testId = useAppSelector((state) => state.testingInfo.testId);
  const questionId = useAppSelector((state) => state.testingInfo.questionId);
  const questionTitle = useAppSelector((state) => state.testingInfo.title);
  const possibleAnswers = useAppSelector(
    (state) => state.testingInfo.possibleAnswers
  );
  const hasNextQuestion = useAppSelector(
    (state) => state.testingInfo.hasNextQuestion
  );
  const isLoading = useAppSelector((state) => state.testingInfo.isLoading);

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
    if (hasNextQuestion) return;
    dispatch(finishTest({ testId, time: new Date() }));
    navigate('/student/certification');
  }, [hasNextQuestion]);

  return (
    <div className={s.testWrapper}>
      <h2 className={`${s.testTitle} ${s[`testTitle--${theme}`]}`}>
        {questionTitle}
      </h2>
      <div className={s.questionWrapper}>
        {/* <div className={s.questionCode}>Code</div> */}
        <ul className={s.questionList}>
          {possibleAnswers &&
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
        </ul>
      </div>
      {questionId && (
        <div className={s.buttonWrapper}>
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
