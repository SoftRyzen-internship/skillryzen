import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import InputMask from 'react-input-mask';

import s from './AuthInput.module.scss';

const objectTheme = {
  dark: {
    input: s.inputDark,
  },
  light: {
    input: s.inputLight,
  },
};

interface IProps {
  id?: string;
  className?: string;
  labelClassName?: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  error?: string;
  touched?: boolean;
  type?: string;
  value?: string;
  icon?: JSX.Element;
  button?: boolean;
  htmlFor?: string;
  labelContent?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: JSX.Element;
  inputMask?: boolean;
  mask?: string;
}

export const AuthInput = ({
  id,
  className,
  name,
  placeholder,
  type,
  value,
  error,
  touched,
  autoComplete,
  htmlFor,
  labelContent,
  onChange,
  onBlur,
  children,
  mask,
}: IProps) => {
  const { theme }: IThemeContext = useThemeContext();
  return (
    <li
      className={`${s.floatingGroup} ${
        touched && (error ? s.floatingLabelError : s.floatingLabelValid)
      }`}
    >
      {touched && error && <p className={s.errorMsg}>{error}</p>}
      {!mask ? (
        <input
          className={objectTheme[theme].input}
          name={name}
          type={type}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete={autoComplete}
          placeholder={placeholder}
        />
      ) : (
        <InputMask
          className={`${objectTheme[theme].input} ${className}`}
          name={name}
          type={type}
          mask={mask}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete={autoComplete}
          placeholder={placeholder}
        />
      )}
      <label className={s.floatingLabel} htmlFor={htmlFor}>
        {labelContent}
      </label>
      {children}
    </li>
  );
};
