import s from './MenuButton.module.scss';
import { ICONS } from '../../../theme';

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
  // const grid4 = [ICONS.GRID, 'grid4'];
  // const grid2 = [ICONS.FUNNEL, 'grid2'];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.menuBtn} ${s[color]} ${className}`}
    >
      {/*{icon === 'grid4' && <img src={grid4[0]} alt={grid4[1]} />}*/}
      {/*{icon === 'grid2' && <img src={grid2[0]} alt={grid2[1]} />}*/}
    </button>
  );
};
