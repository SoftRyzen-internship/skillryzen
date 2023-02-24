import React from 'react'
import { Tag } from '@ui/Tag'
import s from './Card.module.scss'

interface ICard {
  type: 'notification' | 'coin' | 'info'
  size?: 'large' | 'small'
  hideNumber?: boolean
  onClick?: () => void
  item: IItem
}

interface IItem {
  title: string
  text: string
  fields?: string[]
  number?: number
  time: number
}

export const Card: React.FC<ICard> = ({
  type,
  item,
  size = 'large',
  hideNumber = false,
  onClick
}) => {
  const { title, text, fields, number, time } = item

  const addBackgroundColor = (type: string):string => {
    if (type==="notification") {return "green";}
    if (type==="coin") {return "blue";}
    return "yellow"
  }

   return (
    <li className={`${s[`card--${size}`]}`}>
      <div className={s.card__infoWrapper}>
        <p className={`${s[`card__icon--${addBackgroundColor(type)}`]}`}>
          <svg width="24" height="24">
            <use href=""></use>
          </svg>
        </p>
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
      </div>
      <div className={`${s.card__addInfoWrapper} ${type!=="info" && s['card__addInfoWrapper--notification']}`}>
        {!hideNumber && number && (
          <Tag
            type="number"
            label={type === 'info' ? number + ' запитань' : number + ' min ago'}
          />
        )}
        {type === 'info' && <Tag type="time" label={time.toString()} />}
        {type !== 'info' && (
          <button className={s.card__close} onClick={onClick}>
            <svg width="8" height="8">
              <use href=''></use>
            </svg>
          </button>
        )}
      </div>
    </li>
  )
}
