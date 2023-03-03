import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'modules/common/types';
import { Card } from 'ui-kit';
import { useThemeContext } from 'context/themeContext';

import s from './CardsList.module.scss';

interface IItem {
  title: string;
  text: string;
  fields?: string[];
  number: number;
  time?: number;
}

interface ITestsList {
  type?: 'notification' | 'coin' | 'info';
  size: 'large' | 'small';
  testsArray: IItem[];
}

export const CardsList = ({ type = 'info', size, testsArray }: ITestsList) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {testsArray.map((item, index) => (
        <li key={index}>
          <Link to='fullstack_final'>
            <Card
              type={type}
              size={size}
              item={{
                title: item.title,
                text: item.text,
                fields: item.fields,
                number: item.number + ' ' + t('testsMain.numberOfQuestions'),
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
