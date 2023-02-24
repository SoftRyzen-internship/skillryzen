import React from 'react'
import { Tag } from '@ui-kit/Tag'
import { ICONS } from '@theme/icons.const'
import s from './Card.module.scss'

type Type = 'notification' | 'coin' | 'info'

interface ICard {
  type?: Type
  size?: 'large' | 'small'
  hideNumber?: boolean
  custom?: boolean
  onClick?: () => void
  item: IItem
}

interface IItem {
  title: string
  text?: string
  fields?: string[]
  number?: number
  time?: number
}

const imageObject = {
  notification: {
    background: 'green',
    icon: ICONS.WARNING_CIRCLE,
    alt: 'warning',
  },
  coin: { background: 'blue', icon: ICONS.COIN, alt: 'coin' },
  info: { background: 'yellow', icon: ICONS.WARNING_CIRCLE, alt: 'lock' },
}

export const Card: React.FC<ICard> = ({
  type = 'info',
  item,
  size = 'large',
  hideNumber = false,
  custom = false,
  onClick,
}) => {
  const { title, text, fields, number, time } = item

  const addBackgroundColor = (type: Type): string => {
  return custom ? 'green' : imageObject[type].background
  }

  const addIcon = (type: Type): string => {
    return custom ? ICONS.EDIT : imageObject[type].icon
  }

  const addDescription = (type: Type): string => {
    return custom ? 'edit' : imageObject[type].alt
  }

  return (
    <li className={`${s[`card--${size}`]}`}>
      <div className={s.card__infoWrapper}>
        <div className={`${s[`card__thumb--${addBackgroundColor(type)}`]}`}>
          <img
            src={addIcon(type)}
            width="18"
            height="20"
            alt={addDescription(type)}
          />
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
                    <Tag type="field" label={item} />
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
            type="number"
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
          <Tag type="time" label={!custom ? time + '' : '?'} />
        )}
        {type !== 'info' && (
          <button className={s.card__close} onClick={onClick}>
            <img src={ICONS.CLOSE} width="8" height="8" alt="close" />
          </button>
        )}
      </div>
    </li>
  )
}
