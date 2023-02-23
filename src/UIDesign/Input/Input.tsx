import { useState } from 'react'
import s from './Input.module.scss'

interface IProps {
  className?: string;
  name: string;
  placeholder: string;
  type?: string;
}

const Input = ({className, name, placeholder, type}: IProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <input
      className={className ? className : s.input}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      type={type}
      onChange={e => setInputValue(e.currentTarget.value.toLowerCase())}
    />
  )
}

export default Input
