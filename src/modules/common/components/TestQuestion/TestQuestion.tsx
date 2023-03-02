import React, { useState } from 'react';

import { AuthButton, RadioButton } from 'ui-kit';

import { IInfo, array } from 'pages/TestingPage/TestingPage';

import s from './TestQuestion.module.scss';

interface ITestQuestionProps {
  testId: string;
  questionId: string;
  number: number;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  onNextQuestion: React.Dispatch<React.SetStateAction<IInfo>>;
  hasNextQuestion: boolean;
}

// Ця логіка на демо-версію
// type IState = 'checked' | 'wrong' | 'right' | '';

export const TestQuestion = ({
  testId,
  questionId,
  number,
  title,
  possibleAnswers,
  onNextQuestion,
  hasNextQuestion,
}: ITestQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  // const [sendAnswer, setSendAnswer] = useState<string | null>(null);

  const handleAnswer = () => {
    if (selectedAnswer) {
      onNextQuestion({
        number: number + 1,
        questionId: array[number].questionId,
        title: array[number].title,
        possibleAnswers: array[number].possibleAnswers,
        hasNextQuestion: array[number].hasNextQuestion,
      });
      setSelectedAnswer('');
    }
  };

  // Ця логіка на демо-версію
  // const chooseState = (value: string): IState => {
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

  return (
    <div className={s.testWrapper}>
      <h2 className={s.testTitle}>{title}</h2>
      <div className={s.questionWrapper}>
        {/* <div className={s.questionCode}>Code</div> */}
        <ul className={s.questionList}>
          {possibleAnswers.map((answer, index) => (
            <li key={index}>
              <RadioButton
                // state={chooseState(answer.value)}
                state={selectedAnswer === answer.value && 'checked'}
                type='PassTest'
                name='answers'
                value={answer.value}
                checked={selectedAnswer === answer.value}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                label={answer.value}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={s.buttonWrapper}>
        <AuthButton
          type='button'
          text='Answer'
          onClick={handleAnswer}
          size='small'
          color='blue'
          disabled={!selectedAnswer}
        />
      </div>
      {!hasNextQuestion && <p>The end(here must be next page)</p>}
    </div>
  );
};
