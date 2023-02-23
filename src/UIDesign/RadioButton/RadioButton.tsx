import React from 'react'

import s from './RadioButton.module.scss'

type RadioButtonProps = {
  value: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  labelClassName?: string
  label?: string
}

export default function RadioButton({
  value,
  checked,
  onChange,
  id,
  labelClassName = '',
  label,
}: RadioButtonProps) {
  return (
    <label htmlFor={id} className={`${labelClassName} ${s.label}`}>
      <input
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={s.radio}></span>
      {label}
    </label>
  )
}
