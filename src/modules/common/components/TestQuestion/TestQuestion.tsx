import React, { useState } from 'react';

import { AuthButton, RadioButton } from 'ui-kit';

import { IInfo, array } from 'pages/TestingPage/TestingPage';

import s from './TestQuestion.module.scss';

interface ITestQuestionProps {
  testId: string;
  questionId: string;
  title: string;
  rightAnswer: string;
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
  rightAnswer,
  title,
  possibleAnswers,
  onNextQuestion,
  hasNextQuestion,
}: ITestQuestionProps) => {
  const [number, setNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [sendAnswer, setSendAnswer] = useState<string | null>(null);

  const handleAnswer = () => {
    // сет-таймаут для демо-версії, поки залишаємо, як буде бек - переробиться логіка
    if (selectedAnswer) {
      setSendAnswer(selectedAnswer);
      setTimeout(() => {
        setSelectedAnswer('');
        setSendAnswer('');
        onNextQuestion({
          questionId: array[number].questionId,
          title: array[number].title,
          rightAnswer: array[number].rightAnswer,
          possibleAnswers: array[number].possibleAnswers,
          hasNextQuestion: array[number].hasNextQuestion,
        });
      }, 0);
    }
    setNumber((prevstate) => prevstate + 1);
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
                state={
                  !sendAnswer && selectedAnswer === answer.value && 'checked'
                }
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
      {!sendAnswer && (
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
      )}
      {!hasNextQuestion && <p>The end(here must be next page)</p>}
    </div>
  );
};
