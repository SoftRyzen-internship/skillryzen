import s from './AddButton.module.scss'
// import { ICONS } from '@theme/icons.const'

interface ButtonProps {
  type: 'button' | 'submit'
  text: string
  onClick: () => void
  color: 'black' | 'blue'
}

export const AddButton = ({
  type = 'button',
  text,
  onClick,
  color,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.addButton} ${s[color]}`}
    >
      <img
        width={24}
        height={24}
        className={s.iconplus}
        src={ICONS.PLUS}
        alt={'plus'}
      />
      {text}
    </button>
  )
}
