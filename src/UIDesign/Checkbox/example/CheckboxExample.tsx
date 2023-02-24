import React, { useState } from 'react'
import Checkbox from '../Checkbox'

import s from './CheckboxExample.module.scss'

export default function RadioButtonExample() {
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)

  const handleCheckboxChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked1(event.target.checked)
  }
  const handleCheckboxChange2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked2(event.target.checked)
  }
  return (
    <>
      <Checkbox
        label="Are you sure"
        labelClassName={s.label}
        checked={isChecked1}
        onChange={handleCheckboxChange1}
      />

      <p style={{ margin: '10px' }}>
        Selected: {isChecked1 ? 'true' : 'false'}
      </p>

      <Checkbox checked={isChecked2} onChange={handleCheckboxChange2} />

      <p style={{ margin: '10px' }}>
        Selected: {isChecked2 ? 'true' : 'false'}
      </p>
    </>
  )
}
