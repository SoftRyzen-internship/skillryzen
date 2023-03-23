import { Theme } from 'constans/types';
import s from './Input.module.scss';

interface IProps {
  className?: string;
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  icon?: JSX.Element;
  button?: boolean;
  theme?: Theme;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  labelClassName?: string;
}

export const Input = ({
  className,
  name,
  placeholder,
  type,
  icon,
  value,
  button,
  theme = 'dark',
  readOnly,
  onChange,
  onClick,
  labelClassName,
}: IProps) => {
  return (
    <label
      className={`${s.inputContainer} ${labelClassName && labelClassName}`}
    >
      <input
        className={`${s[`input--${theme}`]} ${className && className}`}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      {button && (
        <button
          className={icon ? s.iconVisible : s.iconHidden}
          type='button'
          onClick={onClick}
        >
          {icon ? icon : null}
        </button>
      )}
    </label>
  );
};
