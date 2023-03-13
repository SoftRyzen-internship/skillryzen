import { memo } from 'react';
import s from './MainButton.module.scss';

interface ButtonProps {
  className?: string;
  type: 'button' | 'submit';
  text: string;
  icon?: JSX.Element;
  onClick?: () => void;
  size: 'small' | 'large' | 'modal';
  color?: 'grey' | 'white' | 'blue';
  disabled?: boolean; // коли disabled то кнопка сіра, в іншому випадку акцент колір
  needBackground?: 'noBackgroundAccent' | 'noBackgroundGray'; // робить кнопку прозорою, та додає акцент колір на бордер та текст або сірий бордер
}

export const MainButton = memo(
  ({
    type = 'button',
    text,
    icon,
    onClick,
    size = 'small',
    disabled,
    color,
    needBackground,
    className,
  }: ButtonProps) => {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${s.mainBtn} ${s[size]} ${s[color]} ${s[needBackground]} ${className}`}
      >
        {icon}
        {text}
      </button>
    );
  }
);

MainButton.displayName = 'MainButton';
