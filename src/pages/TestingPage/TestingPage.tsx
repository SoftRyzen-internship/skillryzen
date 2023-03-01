import { useEffect, useState } from 'react';

import { TestQuestion } from 'modules/common/components/TestQuestion/TestQuestion';
import { HeaderTest } from 'modules/dashboard';

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
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  rightAnswer: string;
  hasNextQuestion: boolean;
}

const TestingPage = () => {
  const [testId, setTestId] = useState('');
  const [info, setInfo] = useState<IInfo>();

  useEffect(() => {
    setInfo({
      questionId: array[0].questionId,
      title: array[0].title,
      rightAnswer: array[0].rightAnswer,
      possibleAnswers: array[0].possibleAnswers,
      hasNextQuestion: array[0].hasNextQuestion,
    });
    setTestId('cef14478-0352-424f-b3ca-9eec3ceb8e31');
  }, []);

  return (
    <>
      <HeaderTest />
      {info && (
        <TestQuestion
          testId={testId}
          questionId={info.questionId}
          title={info.title}
          rightAnswer={info.rightAnswer}
          possibleAnswers={info.possibleAnswers}
          hasNextQuestion={info.hasNextQuestion}
          onNextQuestion={setInfo}
        />
      )}
    </>
  );
};

export default TestingPage;
