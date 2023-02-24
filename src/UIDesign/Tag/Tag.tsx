import React from 'react'
import s from './Tag.module.scss'

interface ITag {
  type: 'field' | 'number' | 'time'
  label: string
  icon?: boolean
}

export const Tag: React.FC<ITag> = ({ label, type, icon = false }) => {
  return (
    <p className={`${s[`tag--${type}`]} ${icon && s['tag--icon']} `}>
      {type === 'time' && <span className={s.label}>{label} год</span>}
      {type !== 'time' && label}
      {icon && (
        <svg>
          <use href="" width="12" height="12"></use>
        </svg>
      )}
    </p>
  )
}
