import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TestCard } from 'ui-kit';
import { Item } from '../TestsPageComponent';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './TestsCardsList.module.scss';

interface TestsList {
  size: 'large' | 'small';
  testsArray: Item[];
}

export const TestsCardsList = ({ size, testsArray }: TestsList) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

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
          percentageToPass,
          wasStarted,
          nextRetakeDate,
        }) => (
          <li key={id}>
            <Link
              to='fullstack_final'
              state={{
                author,
                name,
                description,
                blockNames,
                questionsTotalCount,
                timeForCompletionInMs,
              }}
            >
              <TestCard
                size={size}
                item={{
                  author,
                  title: name,
                  text: description,
                  fields: blockNames,
                  number: questionsTotalCount,
                  time: timeForCompletionInMs/60000,
                }}
                theme={theme}
              />
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
