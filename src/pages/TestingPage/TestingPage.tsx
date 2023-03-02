import { useEffect, useState } from 'react';

import { TestQuestion } from 'modules/common/components/TestQuestion/TestQuestion';

export const array = [
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

export interface IInfo {
  questionId: string;
  number: number;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  hasNextQuestion: boolean;
}

const TestingPage = () => {
  const [testId, setTestId] = useState<string>('');
  const [info, setInfo] = useState<IInfo>();

  useEffect(() => {
    setInfo({
      questionId: array[0].questionId,
      number: 1,
      title: array[0].title,
      possibleAnswers: array[0].possibleAnswers,
      hasNextQuestion: array[0].hasNextQuestion,
    });
    setTestId('cef14478-0352-424f-b3ca-9eec3ceb8e31');
  }, []);

  return (
    <>
      {info && (
        <TestQuestion
          number={info.number}
          testId={testId}
          questionId={info.questionId}
          title={info.title}
          possibleAnswers={info.possibleAnswers}
          hasNextQuestion={info.hasNextQuestion}
          onNextQuestion={setInfo}
        />
      )}
    </>
  );
};

export default TestingPage;
