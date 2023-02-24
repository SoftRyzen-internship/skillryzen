import React from 'react'
// import { ICONS } from '../../theme/icons.const'

import s from './Checkbox.module.scss'

type CheckboxProps = {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'form' | 'filter' | 'custom' | ''
  labelClassName?: string
  label?: string
}

export default function Checkbox({
  checked,
  onChange,
  type = '',
  labelClassName = '',
  label,
}: CheckboxProps) {
  const labelClass = (type: 'form' | 'filter' | 'custom' | '') => {
    switch (type) {
      case 'form':
        return `${s.label} ${s.labelForm}`
      case 'filter':
        return `${s.label} ${s.labelFilter}`

      case 'custom':
        return `${s.label} ${labelClassName}`

      default:
        return `${s.label}`
    }
  }
  return (
    <label className={labelClass(type)}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={s.checkbox}>
        {checked ? 'Ic' : 'Iu'}
        {/* <img
          src={checked ? ICONS.CHECK_ROUND : ICONS.DEFAULT_CHECKBOX}
          width={16}
          height={16}
          alt="checkbox icon"
        /> */}
      </span>
      {label}
    </label>
  )
}
