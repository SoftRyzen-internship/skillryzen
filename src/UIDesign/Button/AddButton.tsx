import s from './styles/AddButton.module.scss'

interface ButtonProps {
  type: 'button' | 'submit'
  text: string
  onClick: () => void
  size: 'forTest' | 'forStudent'
  color: 'black' | 'blue'
  icon?: string
}

const AddButton = ({
  type = 'button',
  text,
  onClick,
  size,
  color,
  icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.addButton} ${s[`addButton--${size}`]} ${
        s[`addButton--${color}`]
      }`}
    >
      <img className={s.iconplus} src={icon} />
      {text}
    </button>
  )
}

export default AddButton
