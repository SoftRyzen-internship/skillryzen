import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TestCard } from 'ui-kit';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './CardsList.module.scss';

interface Item {
  id: number;
  author: string;
  title: string;
  text: string;
  fields: string[];
  number: number;
  time: number;
  testStatus?: string;
  wasStarted: boolean;
  nextRetakeDate?: Date | string;
}

interface TestsList {
  size: 'large' | 'small';
  sortedTestsList: Item[];
}

export const CardsList = ({ size, sortedTestsList }: TestsList) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {sortedTestsList.map(
        ({ id, author, title, text, fields, number, time, testStatus }) => (
          <li key={id}>
            <Link to='fullstack_final'>
              <TestCard
                size={size}
                item={{
                  author,
                  title,
                  text,
                  fields,
                  number,
                  time,
                  testStatus,
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
