import { Theme } from 'modules/common/types';
import { ICONS } from 'ui-kit/icons';

import s from './IconButton.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  color: 'blue' | 'black';
  icon: 'grid4' | 'grid2' | 'left' | 'right';
  theme?: Theme;
}

export const IconButton = ({
  type = 'button',
  disabled,
  onClick,
  color,
  icon,
  theme = 'dark',
  className,
}: ButtonProps) => {
  const objectIcons = {
    grid4: <ICONS.GRID_GORIZONTAL className={s.iconGrid4} />,
    grid2: <ICONS.GRID className={s.iconGrid} />,
    left: <ICONS.CHEVRON_LEFT className={s.icon} />,
    right: <ICONS.CHEVRON_RIGHT className={s.icon} />,
  };
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${s.menuBtn} ${s[`${color}--${theme}`]} ${className}`}
    >
      {objectIcons[icon]}
    </button>
  );
};
