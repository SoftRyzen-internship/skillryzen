import React, { useState } from 'react';

import { AuthButton } from 'ui-kit/Buttons/AuthBtn/AuthButton';

import s from './TestQuestion.module.scss';
import { RadioButton } from 'ui-kit';

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
        <div className={s.questionCode}>Code</div>
        <ul className={s.questionList}>
          {possibleAnswers.map((answer) => (
            <li className={s.questionItem} key={answer.label}>
              {/* label, radiobutton треба повністю переробляти
							тому всі стилі не додані, лише загальні для відображення */}
              {/* <label htmlFor={answer.label} className={s.questionLabel}>
                <input
                  type='radio'
                  name={questionId}
                  id={answer.label}
                  value={answer.value}
                  checked={selectedAnswer === answer.value}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {answer.title}
              </label> */}
              <RadioButton
                value={answer.value}
                checked={selectedAnswer === answer.value}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                labelClassName={s.questionLabel}
                label={answer.title}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* кнопку требе доопрацювати */}
      <AuthButton
        type='button'
        text='Answer'
        onClick={handleAnswer}
        size='small'
        color='blue'
        // disabled={!selectedAnswer}
      />
      {!hasNextQuestion && <p>The end(here must be next page)</p>}
    </div>
  );
};
