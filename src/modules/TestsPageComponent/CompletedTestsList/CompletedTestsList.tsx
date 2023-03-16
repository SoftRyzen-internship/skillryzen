import { useState } from 'react';

import { TestCard } from 'ui-kit';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './CompletedTestsList.module.scss';

interface Item {
  id: number;
  author: string;
  name: string;
  description: string;
  blockNames: string[];
  questionsTotalCount: number;
  timeForCompletionInMs: number;
  isPassed: boolean;
  percentageOfCorrectAnswers: string;
}

interface TestsProps {
  size: 'large' | 'small';
}

const array = [
  {
    id: 1,
    name: 'FullStuck Final Test AVAILABLE',
    description:
      'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    blockNames: ['HTML', 'CSS', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 100,
    timeForCompletionInMs: 12000000,
    isPassed: true,
    percentageOfCorrectAnswers: '80%'
  },
  {
    id: 1,
    name: 'FullStuck Final Test AVAILABLE',
    description:
      'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    blockNames: ['HTML', 'CSS', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 100,
    timeForCompletionInMs: 12000000,
    isPassed: false,
    percentageOfCorrectAnswers: '48%'
  },
];

export const CompletedTestsList = ({ size }: TestsProps) => {
  const [testsArray, setTestsArray] = useState<Item[]>(array);
  const { theme }: IThemeContext = useThemeContext();

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {testsArray.map(
        ({
          id,
          author,
          name,
          description,
          blockNames,
          questionsTotalCount,
          timeForCompletionInMs,
          isPassed,
          percentageOfCorrectAnswers
        }) => (
          <li key={id}>
            <TestCard
              size={size}
              item={{
                author,
                title: name,
                text: description,
                fields: blockNames,
                number: questionsTotalCount,
                time: timeForCompletionInMs / 60000,
                testStatus: isPassed ? 'done' : 'failed',
                percentageOfCorrectAnswers
              }}
              theme={theme}
            />
          </li>
        )
      )}
    </ul>
  );
};
