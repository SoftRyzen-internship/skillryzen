import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { InfoCard } from 'ui-kit';
import { useThemeContext } from 'context/themeContext';

import s from './NotificationsCardList.module.scss';

interface Card {
  id: number;
  title: string;
  text: string;
  number: number;
}

interface NotificationCardListProps {
  size: 'large' | 'small';
  testsArray: Card[];
}

export const NotificationsCardList = ({
  size,
  testsArray,
}: NotificationCardListProps) => {
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
