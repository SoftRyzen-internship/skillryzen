import s from './style/AuthorizingButton.module.scss'

interface ButtonProps {
  type: 'button' | 'submit'
  text: string
  onClick: () => void
  size: 'small' | 'large'
  color: 'grey' | 'white' | 'blue' | 'light-blue'
}

const AuthorizingButton = ({
  type = 'button',
  text,
  onClick,
  size = 'small',
  color,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.authButton} ${s[`authButton--${size}`]} ${
        s[`authButton--${color}`]
      }`}
    >
      {text}
    </button>
  )
}

export default AuthorizingButton
