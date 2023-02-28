import s from './MenuButton.module.scss';
import { ICONS } from 'theme';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  color: 'blue' | 'black';
  icon: 'grid4' | 'grid2';
}

export const MenuButton = ({
  type = 'button',
  onClick,
  color,
  icon,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.menuBtn} ${s[color]} ${className}`}
    >
      {icon === 'grid4' ? (
        <ICONS.GRID className={s.iconGrid} />
      ) : (
        <ICONS.GRID_GORIZONTAL className={s.iconGrid4} />
      )}
    </button>
  );
};
