import { Theme } from 'constants/types';
import { ICONS } from 'ui-kit/icons';
import { Tag } from 'ui-kit';

import s from './InfoCard.module.scss';

type Type = 'notification' | 'coin';

interface Card {
  type: Type;
  size: 'large' | 'small';
  item: Item;
  onClick?: () => void;
  theme?: Theme;
}

interface Item {
  title: string;
  text: string;
  number: number;
}

const imageObject = {
  notification: {
    background: 'green',
    icon: <ICONS.WARNING_CIRCLE className={s.notification__icon} />,
  },
  coin: {
    background: 'blue',
    icon: <ICONS.COIN className={s.coin__icon} />,
  },
};

export const InfoCard = ({
  type,
  item,
  size,
  theme = 'dark',
  onClick,
}: Card) => {
  const { title, text, number } = item;
  const { background, icon } = imageObject[type];

  return (
    <div className={`${s[`card--${size}`]} ${s[`card--${theme}`]}`}>
      <div className={s.card__infoWrapper}>
        <div
          className={`${s.card__iconThumb} ${
            s[`card__iconThumb--${background}`]
          }`}
        >
          {icon}
        </div>
        <div className={s.card__contentWrapper}>
          <p className={`${s.card__title} ${s[`card__title--${theme}`]}`}>
            {title}
          </p>
          <p className={`${s.card__text} ${s[`card__text--${theme}`]}`}>
            {text}
          </p>
        </div>
      </div>
      <div className={s.card__addInfoWrapper}>
        <Tag type='number' theme={theme} label={number + ' min ago'} />
        <button
          className={`${s.card__close} ${s[`card__close--${theme}`]}`}
          onClick={onClick}
        >
          {
            <ICONS.CROSS_SMALL
              className={`${s.card__closeIcon} ${
                s[`card__closeIcon--${theme}`]
              }`}
            />
          }
        </button>
      </div>
    </div>
  );
};
