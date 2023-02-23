import { useState } from 'react'
import s from './Input.module.scss'

interface IProps {
  className?: string
  name: string
  placeholder: string
  type?: string
  icon?: string
}

const Input = ({ className, name, placeholder, type, icon }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <div className={s.inputContainer}>
      <input
        className={className ? className : s.input}
        name={name}
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value.toLowerCase())}
      />
      <button className={icon ? s.iconVisible : s.iconHidden} type="button">
        <img className={s.icon} src={icon} />
      </button>
    </div>
  )
}

export default Input
