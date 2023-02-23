import React, { useState } from 'react'
import RadioButton from '../RadioButton'

import s from './RadioButtonExample.module.scss'

export default function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedOption2, setSelectedOption2] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value)
  }
  return (
    <>
      <RadioButton
        id="button1"
        value="Option 1"
        label="Option 1"
        labelClassName={s.label}
        checked={selectedOption === 'Option 1'}
        onChange={handleOptionChange}
      />
      <RadioButton
        id="button2"
        value="Option 2"
        label="Option 2"
        labelClassName={s.label}
        checked={selectedOption === 'Option 2'}
        onChange={handleOptionChange}
      />
      <p style={{ margin: '10px' }}>Selected option: {selectedOption}</p>

      <RadioButton
        id="button3"
        value="Option 1"
        checked={selectedOption2 === 'Option 1'}
        onChange={handleOptionChange2}
      />
      <RadioButton
        id="button4"
        value="Option 2"
        checked={selectedOption2 === 'Option 2'}
        onChange={handleOptionChange2}
      />
      <p style={{ margin: '10px' }}>Selected option: {selectedOption2}</p>
    </>
  )
}
