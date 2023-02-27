import s from './AuthButton.module.scss';

interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
  onClick: () => void;
  size: 'small' | 'large';
  color: 'grey' | 'white' | 'blue';
}

export const AuthButton = ({
  type = 'button',
  text,
  onClick,
  size = 'small',
  color,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.authBtn} ${s[size]} ${s[color]}`}
    >
      {text}
    </button>
  );
};
