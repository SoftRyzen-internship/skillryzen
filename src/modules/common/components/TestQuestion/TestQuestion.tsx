import React, { useState } from 'react';

import { AuthButton } from 'ui-kit/Buttons/AuthBtn/AuthButton';
import { RadioButton } from 'ui-kit';

import s from './TestQuestion.module.scss';

interface ITestQuestionProps {
  questionId: string;
  title: string;
  rightAnswer: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  onNextQuestion: (
    answer: { value: string; title: string; label: string }[]
  ) => void;
  hasNextQuestion: boolean;
}
export const TestQuestion = ({
  questionId,
  rightAnswer,
  title,
  possibleAnswers,
  onNextQuestion,
  hasNextQuestion,
}: ITestQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [sendAnswer, setSendAnswer] = useState<string | null>(null);

  const handleAnswer = () => {
    if (selectedAnswer) {
      setSendAnswer(selectedAnswer);

      onNextQuestion([{ value: selectedAnswer, title: title, label: '' }]);
    }
  };
  return (
    <div className={s.testWrapper}>
      <h2 className={s.testTitle}>{title}</h2>
      <div className={s.questionWrapper}>
        {/* <div className={s.questionCode}>Code</div> */}
        <ul className={s.questionList}>
          {possibleAnswers.map((answer, index) => (
            <RadioButton
              key={index}
              state={
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
              label={answer.title}
            />
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
