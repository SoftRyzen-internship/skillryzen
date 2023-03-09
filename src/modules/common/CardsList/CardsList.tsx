import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { TestCard } from 'ui-kit';
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
}

interface TestsList {
  size: 'large' | 'small';
  testsArray: Item[];
}

export const CardsList = ({ size, testsArray }: TestsList) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {testsArray.map((item) => (
        <li key={item.id}>
          <Link to='fullstack_final'>
            <TestCard
              size={size}
              item={{
                author: item.author,
                title: item.title,
                text: item.text,
                fields: item.fields,
                number: item.number,
                time: item.time,
              }}
              theme={theme}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
