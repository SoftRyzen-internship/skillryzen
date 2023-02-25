import s from './HeaderButton.module.scss'

interface HeaderButtonProps {
  icon: string
  className?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  popupContent?: React.ReactNode
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  icon,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  popupContent,
}) => {
  return (
    <div
      className={className ? `${s.container} ${className}` : s.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className={s.button} type="button" onClick={onClick}>
        <img width={24} height={24} className={s.icon} src={icon} alt="icon" />
      </button>
      {popupContent ? <div className={s.popup}>{popupContent}</div> : null}
    </div>
  )
}
