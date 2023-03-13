import { memo } from 'react';
import { Theme } from 'constans/types';
import { ICONS } from 'ui-kit/icons';

import s from './IconButton.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  color: 'blue' | 'black';
  icon: 'grid4' | 'grid2';
  theme?: Theme;
}

export const IconButton = memo(
  ({
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
  }
);

IconButton.displayName = 'IconButton';
