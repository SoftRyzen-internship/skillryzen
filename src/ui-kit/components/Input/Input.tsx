import { Theme } from 'constans/types';
import s from './Input.module.scss';

interface IProps {
  className?: string;
  name: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: JSX.Element;
  button?: boolean;
  theme?: Theme;
  readOnly?: boolean;
}

export const Input = ({
  className,
  name,
  placeholder,
  type,
  icon,
  onChange,
  value,
  button,
  theme = 'dark',
  readOnly,
}: IProps) => {
  return (
    <label className={s.inputContainer}>
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
        <button className={icon ? s.iconVisible : s.iconHidden} type='button'>
          {icon ? icon : null}
        </button>
      )}
    </label>
  );
};
