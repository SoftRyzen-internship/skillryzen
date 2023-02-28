import React, { useState } from 'react';

import { AuthButton } from 'ui-kit/Buttons/AuthBtn/AuthButton';
import { RadioButton } from 'ui-kit';

import s from './TestQuestion.module.scss';

interface ITestQuestionProps {
  questionId: string;
  title: string;
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
  title,
  possibleAnswers,
  onNextQuestion,
  hasNextQuestion,
}: ITestQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = () => {
    if (selectedAnswer) {
      onNextQuestion([{ value: selectedAnswer, title: title, label: '' }]);
    }
  };

  return (
    <div className={s.testWrapper}>
      <h2 className={s.testTitle}>{title}</h2>
      <div className={s.questionWrapper}>
        {/* Наступний рядок потрібен коли з'являться питання з кодом */}
        {/* <div className={s.questionCode}>Code</div> */}
        <ul className={s.questionList}>
          {possibleAnswers.map((answer) => (
            <li className={s.questionItem} key={answer.label}>
              <label className={s.questionLabel}>
                <input
                  type='radio'
                  name={questionId}
                  value={answer.value}
                  checked={selectedAnswer === answer.value}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {answer.title}
              </label>
              {/* <RadioButton
                value={answer.value}
                checked={selectedAnswer === answer.value}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                // labelClassName={s.questionLabel}
                label={answer.title}
              /> */}
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
          disabled={!selectedAnswer}
        />
      </div>
      {!hasNextQuestion && <p>The end(here must be next page)</p>}
    </div>
  );
};
