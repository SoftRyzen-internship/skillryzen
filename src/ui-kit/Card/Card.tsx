import { ICONS } from 'theme';
import { Tag } from 'ui-kit';

import s from './Card.module.scss';

type Type = 'notification' | 'coin' | 'info';

interface ICard {
  type?: Type;
  size?: 'large' | 'small';
  hideNumber?: boolean;
  custom?: boolean;
  onClick?: () => void;
  item: IItem;
}

interface IItem {
  title: string;
  text?: string;
  fields?: string[];
  number?: string;
  time?: number;
}

const imageObject = {
  info: {
    background: 'yellow',
    icon: <ICONS.LOCK className={s.card__icon} />,
  },
  notification: {
    background: 'green',
    icon: <ICONS.WARNING_CIRCLE className={s.card__icon} />,
  },
  coin: { background: 'blue', icon: <ICONS.COIN className={s.card__icon} /> },
};

export const Card = ({
  type = 'info',
  item,
  size = 'large',
  hideNumber = false,
  custom = false,
  onClick,
}: ICard) => {
  const { title, text, fields, number, time } = item;

  const addBackgroundColor = (type: Type): string => {
    return custom ? 'green' : imageObject[type].background;
  };

  const addIcon = (type: Type) => {
    return custom ? (
      <ICONS.EDIT className={s.card__icon} />
    ) : (
      imageObject[type].icon
    );
  };

  return (
    <div className={`${s[`card--${size}`]}`}>
      <div className={s.card__infoWrapper}>
        <div className={`${s[`card__thumb--${addBackgroundColor(type)}`]}`}>
          {addIcon(type)}
        </div>
        {!custom && (
          <div className={s.card__contentWrapper}>
            <div className={s.card__content}>
              <p className={s.card__title}>{title}</p>
              <p className={s.card__text}>{text}</p>
            </div>
            {fields && type === 'info' && (
              <ul className={s.card__list}>
                {fields.map((item, index) => (
                  <li key={index}>
                    <Tag type='field' label={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {custom && <p className={s.card__template}>{title}</p>}
      </div>
      <div
        className={`${s.card__addInfoWrapper} ${
          type !== 'info' && s['card__addInfoWrapper--notification']
        }`}
      >
        {((!hideNumber && number) || custom) && (
          <Tag
            type='number'
            label={type === 'info' && custom ? '? запитань' : number}
          />
        )}
        {((time && type === 'info') || custom) && (
          <Tag type='time' label={!custom ? time + '' : '?'} />
        )}
        {type !== 'info' && (
          <button className={s.card__close} onClick={onClick}>
            {/* <ICONS.CLOSE className={s.card__closeIcon}/> */}
          </button>
        )}
      </div>
    </div>
  );
};
