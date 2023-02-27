import s from './AuthButton.module.scss';

interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
  onClick: () => void;
  size: 'small' | 'large';
  disabled?: boolean; //коли disabled то кнопка сіра, в іншому випадку акцент колір
  needBackground?: 'noBackgroundAccent' | 'noBackgroundGray'; //робить кнопку прозорою, та додає акцент колір на бордер та текст або сірий бордер
}

export const AuthButton = ({
  type = 'button',
  text,
  onClick,
  size = 'small',
  disabled,
  needBackground,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${s.authBtn} ${s[size]} ${s[needBackground]}`}
    >
      {text}
    </button>
  );
};
