import React from 'react'
import s from './Popup.module.scss'

type TItem = {
  icon?: string
  text?: string
}

interface IProps {
  list: TItem[]
  vievAll?: string
}

export const Popup = ({ list, vievAll }: IProps) => {
  return (
    <div className={s.popupWrapper}>
      <button
        className={vievAll ? s.vievAllVisible : s.vievAllHidden}
        type="button"
      >
        {vievAll}
      </button>
      <ul>
        {' '}
        {list.map(({ icon, text }, idx) => (
          <li key={idx} className={s.item}>
            <img className={s.icon} src={icon} alt="Popu Icon" />
            <p className={s.text}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
