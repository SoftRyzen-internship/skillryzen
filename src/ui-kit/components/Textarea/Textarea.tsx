import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { memo } from 'react';
import s from './Textarea.module.scss';

interface IProps {
  labelClassName?: string;
  placeholderClassName?: string;
  labelContent?: string;
  className?: string;
  autofocus?: string;
  autoComplete?: 'on' | 'off';
  cols?: number;
  disabled?: boolean;
  form?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const objectTheme = {
  dark: {
    textarea: s.textareaDark,
  },
  light: {
    textarea: s.textareaLight,
  },
};

export const Textarea = memo(
  ({
    labelClassName,
    labelContent,
    className,
    placeholderClassName,
    autofocus,
    autoComplete,
    cols,
    disabled,
    form,
    maxlength,
    minlength,
    name,
    placeholder,
    readonly,
    required,
    rows,
    id,
  }: IProps) => {
    const { theme }: IThemeContext = useThemeContext();

    return (
      <label className={`${s.label} ${labelClassName}`}>
        <textarea
          className={`${objectTheme[theme].textarea} ${className}`}
          id={id}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
        />
        <span className={`${s.placeholder} ${placeholderClassName}`}>
          {labelContent}
        </span>
      </label>
    );
  }
);

Textarea.displayName = 'Textarea';
