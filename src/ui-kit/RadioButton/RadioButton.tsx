import React from 'react'

import s from './RadioButton.module.scss'

type RadioButtonProps = {
  value: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  labelClassName?: string
  label?: string
}

export default function RadioButton({
  value,
  checked,
  onChange,
  labelClassName = '',
  label,
}: RadioButtonProps) {
  return (
    <label className={`${labelClassName} ${s.label}`}>
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      <span className={s.radio}></span>
      {label}
    </label>
  )
}
