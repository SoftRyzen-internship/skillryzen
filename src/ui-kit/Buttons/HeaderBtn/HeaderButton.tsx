import s from './HeaderButton.module.scss';

interface HeaderButtonProps {
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  popupContent?: React.ReactNode;
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
      <button className={s.button} type='button' onClick={onClick}>
        {icon}
      </button>
      {popupContent ? <div className={s.popup}>{popupContent}</div> : null}
    </div>
  );
};
