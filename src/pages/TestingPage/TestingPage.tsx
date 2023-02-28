import { useState } from 'react';

import { TestQuestion } from 'modules/common/components/TestQuestion/TestQuestion';
import { HeaderTest } from 'modules/dashboard';

const TestingPage = () => {
  const [number, setNumber] = useState(0);

  const array = [
    {
      questionId: 'hjbnmkjlm,',
      title: 'Що таке Javascript?',
      rightAnswer: 'мова програмування',
      possibleAnswers: [
        { value: 'мова програмування', title: '', label: 'А' },
        { value: 'бог знає що', title: '', label: 'B' },
        { value: 'мова життя', title: '', label: 'C' },
        { value: 'не знаю що', title: '', label: 'D' },
      ],
      hasNextQuestion: true,
    },
    {
      questionId: 'hjbnmkjlm,',
      title: 'Що таке Python?',
      rightAnswer: 'мова програмування',
      possibleAnswers: [
        { value: 'мова програмування', title: '', label: 'А' },
        { value: 'бог знає що', title: '', label: 'B' },
        { value: 'мова життя', title: '', label: 'C' },
        { value: 'не знаю що', title: '', label: 'D' },
      ],
      hasNextQuestion: true,
    },
    {
      questionId: 'hjbnmkjlm,',
      title: 'Що таке C++?',
      rightAnswer: 'мова програмування',
      possibleAnswers: [
        { value: 'мова програмування', title: '', label: 'А' },
        { value: 'бог знає що', title: '', label: 'B' },
        { value: 'мова життя', title: '', label: 'C' },
        { value: 'не знаю що', title: '', label: 'D' },
      ],
      hasNextQuestion: true,
    },
  ];

  return (
    <>
      <HeaderTest />
      <TestQuestion
        questionId={array[number].questionId}
        title={array[number].title}
        rightAnswer={array[number].rightAnswer}
        possibleAnswers={array[number].possibleAnswers}
        hasNextQuestion={array[number].hasNextQuestion}
        onNextQuestion={() => setNumber(number + 1)}
      />
    </>
  );
};

export default TestingPage;
