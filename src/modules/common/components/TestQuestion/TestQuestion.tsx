import React, { useState } from 'react';

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
    <div>
      <h2>{title}</h2>
      <ul>
        {possibleAnswers.map((answer) => (
          <li key={answer.label}>
            <label htmlFor={answer.label}>
              <input
                type='radio'
                name={questionId}
                id={answer.label}
                value={answer.value}
                checked={selectedAnswer === answer.value}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />
              {answer.title}
            </label>
          </li>
        ))}
      </ul>
      <button disabled={!selectedAnswer} onClick={handleAnswer}>
        Answer
      </button>
      {!hasNextQuestion && <p>The end(here must be next page)</p>}
    </div>
  );
};
