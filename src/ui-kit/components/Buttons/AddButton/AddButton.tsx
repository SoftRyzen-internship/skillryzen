import { ICONS } from 'ui-kit/icons';

import s from './AddButton.module.scss';

interface ButtonProps {
  className?: string;
  type: 'button' | 'submit';
  text: string;
  onClick?: () => void;
  color: 'black' | 'blue';
}

export const AddButton = ({
  type = 'button',
  text,
  onClick,
  color,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.addButton} ${className} ${s[color]}`}
    >
      <ICONS.PLUS className={s.icon} />
      {text}
    </button>
  );
};
