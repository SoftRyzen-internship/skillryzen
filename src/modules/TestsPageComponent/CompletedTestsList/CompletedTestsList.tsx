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
        // console.log(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

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
        }) => (
          <li key={id}>
            <TestCard
              size={size}
              item={{
                author: author ? author : 'GoIt',
                title: name,
                text: description ? description : 'Welcome to Star class LMS!',
                fields:
                  blockNames?.length !== 0
                    ? blockNames
                    : ['React', 'JS', 'HTML+CSS'],
                number: questions.length,
                time: Math.round(timeForCompletionInMs / 60000),
                testStatus: isPassed ? 'done' : 'failed',
                percentageOfCorrectAnswers: Math.round(
                  percentageOfCorrectAnswers * 100
                ),
              }}
              theme={theme}
            />
          </li>
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
