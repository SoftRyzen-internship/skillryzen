import React from 'react';
import { Tag } from '@ui-kit/Tag';
import { Close, WarningCircle, Edit, Coin, Lock } from '@theme/icons.const';
import { COLORS } from '@theme/colors.const';
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
  number?: number;
  time?: number;
}

const iconBackground = {
  notification: 'green',
  coin: 'blue',
  info: 'yellow',
};

export const Card: React.FC<ICard> = ({
  type = 'info',
  item,
  size = 'large',
  hideNumber = false,
  custom = false,
  onClick,
}) => {
  const { title, text, fields, number, time } = item;

  const addBackgroundColor = (type: Type): string => {
    return custom ? 'green' : iconBackground[type];
  };

  return (
    <li className={`${s[`card--${size}`]}`}>
      <div className={s.card__infoWrapper}>
        <div className={`${s[`card__thumb--${addBackgroundColor(type)}`]}`}>
          {!custom && type === 'info' && <Lock size='20px' color={COLORS.white} />}
          {!custom && type === 'coin' && <Coin size='20px' color={COLORS.white} />}
          {!custom && type === 'notification' && (
            <WarningCircle size='15px' color={COLORS.white}/>
          )}
          {custom && <Edit size='17px' color={COLORS.white} />}
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
            label={
              type === 'info' && custom
                ? '? запитань'
                : !custom
                ? number + ' запитань'
                : number + ' min ago'
            }
          />
        )}
        {((time && type === 'info') || custom) && (
          <Tag type='time' label={!custom ? time + '' : '?'} />
        )}
        {type !== 'info' && (
          <button className={s.card__close} onClick={onClick}>
            <Close color={COLORS.checkboxIcon} size='24px' />
          </button>
        )}
      </div>
    </li>
  );
};
