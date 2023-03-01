import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card } from 'ui-kit';

import s from './CardsList.module.scss';

interface IItem {
  title: string;
  text: string;
  fields?: string[];
  number: string;
  time?: number;
}

interface ITestsList {
  type?: 'notification' | 'coin' | 'info';
  size: 'large' | 'small';
  testsArray: IItem[];
  hideNumber?: boolean;
  onClick?: () => void;
}

export const CardsList = ({ type = 'info', size, testsArray }: ITestsList) => {
  const { t } = useTranslation();

  return (
    <ul className={size==="large" ? s['testsList--large'] : s['testsList--small']}>
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
                number: t('testsMain.numberOfQuestions'),
                time: item.time,
              }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
