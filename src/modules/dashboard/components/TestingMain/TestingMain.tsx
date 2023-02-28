import React from 'react';

import { TestQuestion } from 'modules/common/components/TestQuestion/TestQuestion';

export const TestingMain = () => {
  // тут поки статична заготовка
  const testQuestion = {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'How to create a constant in JS?',
    rightAnswer: 'const',
    possibleAnswers: [
      {
        value: 'const',
        title: 'const x = 1',
        label: 'A',
      },
      {
        value: 'let',
        title: 'let x = 1',
        label: 'B',
      },
      {
        value: 'var',
        title: 'var x = 1',
        label: 'C',
      },
      {
        value: 'CONST',
        title: 'CONST x = 1',
        label: 'D',
      },
    ],
    onNextQuestion: (
      answer: { value: string; title: string; label: string }[]
      // тут буде відповідь з бекенда
    ) => {},
    hasNextQuestion: true,
  };

  return (
    <div>
      <div>
        <TestQuestion
          questionId={testQuestion.id}
          title={testQuestion.title}
          rightAnswer={testQuestion.rightAnswer}
          possibleAnswers={testQuestion.possibleAnswers}
          onNextQuestion={testQuestion.onNextQuestion}
          hasNextQuestion={testQuestion.hasNextQuestion}
        />
      </div>
    </div>
  );
};
