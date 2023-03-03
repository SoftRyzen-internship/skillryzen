import { useEffect, useState } from 'react';

import { TestQuestion } from './TestQuestion/TestQuestion';
import { getRandomTest, loginUser } from 'services/axiosConfig';

export interface Info {
  questionId: string;
  number: number;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
}

export const TestingPageComponent = () => {
  const [testId, setTestId] = useState<string>('');
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    loginUser()
      .then((response) => getRandomTest())
      .then((data) => {
        setInfo({
          questionId: data.nextQuestion.id,
          number: 1,
          title: data.nextQuestion.title,
          possibleAnswers: data.nextQuestion.possibleAnswers,
        });
        setTestId(data.id);
      })
      .catch((error) => console.log(error));
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
          onNextQuestion={setInfo}
        />
      )}
    </>
  );
};
