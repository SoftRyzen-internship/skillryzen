import s from './AddButton.module.scss';
import { ICONS } from 'theme';

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
      <ICONS.PLUS />
      {/* <img
        width={24}
        height={24}
        className={s.iconplus}
        src={ICONS.PLUS}
        alt={'plus'}
      /> */}
      {text}
    </button>
  );
};
