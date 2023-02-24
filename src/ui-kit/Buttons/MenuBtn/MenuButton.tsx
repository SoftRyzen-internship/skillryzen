import s from './MenuButton.module.scss';
import { ICONS } from '@theme/icons.const';

const firstIcon = [ICONS.GRID, 'grid'];
const secondIcon = [ICONS.FUNNEL, 'funnel'];

interface ButtonProps {
  type?: 'button' | 'submit';
  onClick: () => void;
  color: 'blue' | 'black';
  icon: 'firstIcon' | 'secondIcon';
}

export const MenuButton = ({
  type = 'button',
  onClick,
  color,
  icon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.menuBtn} ${s[color]}`}
    >
      {icon === 'firstIcon' && <img src={firstIcon[0]} alt={firstIcon[1]} />}
      {icon === 'secondIcon' && <img src={secondIcon[0]} alt={secondIcon[1]} />}
    </button>
  );
};
