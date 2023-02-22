import React, { ButtonHTMLAttributes } from 'react'
// test button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  ...rest
}) => {
  return (
    <button
      className={`button button--${variant}${
        disabled ? ' button--disabled' : ''
      }`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
