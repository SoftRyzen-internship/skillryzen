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

const Popup = ({ list, vievAll }: IProps) => {
  return (
    <div className={s.popupWrapper}>
      <button
        className={vievAll ? s.vievAllVisible : s.vievAllHidden}
        type="button"
      >
        {vievAll}
      </button>
      {list.map(({ icon, text }, idx) => (
        <li key={idx} className={s.item}>
          <img className={s.icon} src={icon} />
          <div className={s.text}>{text}</div>
        </li>
      ))}
    </div>
  )
}

export default Popup
