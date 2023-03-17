import { useEffect, useState } from 'react';

import { TestCard } from 'ui-kit';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { getCompletedTests } from 'redux/testingInfo/testingInfoOperations';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';

import s from './CompletedTestsList.module.scss';

interface Item {
  id: number;
  author: string;
  name: string;
  description: string;
  blockNames: string[];
  questions: [];
  timeForCompletionInMs: number;
  isPassed: boolean;
  percentageOfCorrectAnswers: number;
  retakeAttempt: number;
  finishedAt: string;
  startedAt: string;
}

interface TestsProps {
  size: 'large' | 'small';
}

export const CompletedTestsList = ({ size }: TestsProps) => {
  const [testsArray, setTestsArray] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { theme }: IThemeContext = useThemeContext();

  useEffect(() => {
    setIsLoading(true);
    getCompletedTests()
      .then(data => {
        setTestsArray(data);
        console.log(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const findTestTime = (end: string, start: string): number => {
    const endTime = new Date(end);
    console.log(end);
    console.log(endTime);
    const startTime = new Date(start);
    return (endTime.getTime() - startTime.getTime()) / 1000;
  };

  const convertTestDate = (end: string): string => {
    const endTime = new Date(end);
    return `${endTime.getDate()}.${String(endTime.getMonth() + 1).padStart(2, '0')}.${String(
      endTime.getFullYear()
    ).slice(2)}`;
  };

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {testsArray.map(
        ({
          id,
          author,
          name,
          description,
          blockNames,
          questions,
          timeForCompletionInMs,
          isPassed,
          percentageOfCorrectAnswers,
          retakeAttempt,
          finishedAt,
          startedAt,
        }) => (
          <>
            <li key={id}>
              <TestCard
                size={size}
                item={{
                  author: author ? author : 'GoIt',
                  title: name,
                  text: description
                    ? description
                    : 'Welcome to Star class LMS!',
                  fields:
                    blockNames?.length !== 0
                      ? blockNames
                      : ['React', 'JS', 'HTML+CSS'],
                  number: questions.length,
                  time: Math.round(timeForCompletionInMs / 60000),
                  testStatus: isPassed ? 'done' : 'failed',
                  testDate: convertTestDate(finishedAt),
                  attempts: retakeAttempt ? retakeAttempt + 1 : '?',
                  percentageOfCorrectAnswers: Math.round(
                    percentageOfCorrectAnswers * 100
                  ),
                }}
                theme={theme}
              />
            </li>
          </>
        )
      )}
      {isLoading && (
        <Skeleton
          length={size === 'large' ? 4 : 8}
          value='skeleton'
          className={`${s[`skeletonItem--${size}`]}`}
        />
      )}
    </ul>
  );
};
