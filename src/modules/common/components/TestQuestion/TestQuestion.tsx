import React, { useState } from 'react';

import { AuthButton } from 'ui-kit/Buttons/AuthBtn/AuthButton';
import { RadioButton } from 'ui-kit';

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
      }, 1000);
    }
    setNumber((prevstate) => prevstate + 1);
  };

  return (
    <div className={s.testWrapper}>
      <h2 className={s.testTitle}>{title}</h2>
      <div className={s.questionWrapper}>
        {/* <div className={s.questionCode}>Code</div> */}
        <ul className={s.questionList}>
          {possibleAnswers.map((answer, index) => (
            <li key={index}>
              <RadioButton
                state={
                  // це тимчасове рішення поки нема бекенду
                  (sendAnswer &&
                    sendAnswer === answer.value &&
                    rightAnswer === answer.value) ||
                  (sendAnswer && rightAnswer === answer.value)
                    ? 'right'
                    : sendAnswer && sendAnswer === answer.value
                    ? 'wrong'
                    : !sendAnswer && selectedAnswer === answer.value
                    ? 'checked'
                    : ''
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
