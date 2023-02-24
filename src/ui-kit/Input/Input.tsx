import { useState } from 'react'

import s from './Input.module.scss'

interface IProps {
  className?: string
  name: string
  placeholder: string
  type?: string
  icon?: string
}

export const Input = ({ className, name, placeholder, type, icon }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase().trim())
  }

  return (
    <div className={s.inputContainer}>
      <input
        className={className ? className : s.input}
        name={name}
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className={icon ? s.iconVisible : s.iconHidden} type="button">
        <img className={s.icon} src={icon} alt="Icon Search" />
      </button>
    </div>
  )
}
