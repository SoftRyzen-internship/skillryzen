import { ICONS } from 'theme';

import s from './MenuButton.module.scss';

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
  const obectIcons = {
    grid4: <ICONS.GRID_GORIZONTAL className={s.iconGrid4} />,
    grid2: <ICONS.GRID className={s.iconGrid} />,
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.menuBtn} ${s[color]} ${className}`}
    >
      {obectIcons[icon]}
    </button>
  );
};
