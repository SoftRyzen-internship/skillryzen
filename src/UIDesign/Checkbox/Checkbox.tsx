import React from 'react'

import s from './Checkbox.module.scss'

type CheckboxProps = {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  labelClassName?: string
  label?: string
}

export default function Checkbox({
  checked,
  onChange,
  labelClassName = '',
  label,
}: CheckboxProps) {
  return (
    <label className={`${labelClassName} ${s.label}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={s.checkbox}></span>
      {label}
    </label>
  )
}
