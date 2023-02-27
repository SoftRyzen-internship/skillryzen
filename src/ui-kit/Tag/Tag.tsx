import React from 'react'
import { Close } from '@theme/icons.const'
import { COLORS } from '@theme/colors.const'
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
      {icon && <Close size="12px" color={COLORS.checkboxIcon}/>}
    </p>
  )
}
