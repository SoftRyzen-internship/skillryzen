import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { InfoCard } from 'ui-kit';
import { useThemeContext } from 'context/themeContext';

import s from './NotificationCardList.module.scss';

interface TestsListProps {
  size?: 'large' | 'small';
}

interface Item {
  id: number;
  title: string;
  text: string;
  number: number;
}

interface TestsList {
  size: 'large' | 'small';
  testsArray: Item[];
}

export const NotificationCardList = ({ size, testsArray }: TestsList) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ul className={`${s[`notificationsList--${size}`]}`}>
      {testsArray.map((item) => (
        <li key={item.id}>
          <InfoCard
            size={size}
            type='notification'
            item={{
              title: item.title,
              text: item.text,
              number: item.number,
            }}
            theme={theme}
          />
        </li>
      ))}
    </ul>
  );
};
