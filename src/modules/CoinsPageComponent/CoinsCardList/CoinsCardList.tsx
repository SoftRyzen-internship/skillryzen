import { memo } from 'react';

import { useThemeContext } from 'context/themeContext';

import { InfoCard } from 'ui-kit';

import { IThemeContext } from 'constants/types';

import s from './CoinsCardList.module.scss';

interface Card {
  id: number;
  title: string;
  text: string;
  number: number;
}

interface CoinsCardListProps {
  size: 'large' | 'small';
  testsArray: Card[];
}

export const CoinsCardList = memo(
  ({ size, testsArray }: CoinsCardListProps) => {
    const { theme }: IThemeContext = useThemeContext();

    return (
      <ul className={`${s[`coinsList--${size}`]}`}>
        {testsArray.map(item => (
          <li key={item.id}>
            <InfoCard
              size={size}
              type='coin'
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
  }
);

CoinsCardList.displayName = 'CoinsCardList';
