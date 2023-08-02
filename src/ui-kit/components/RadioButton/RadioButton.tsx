import { Theme } from 'constants/types';

import s from './RadioButton.module.scss';

type RadioButtonProps = {
  state?: 'checked' | 'wrong' | 'right' | '';
  type: 'PassTest' | 'CreateTest';
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  labelClassName?: string;
  label?: string;
  theme?: Theme;
};

export function RadioButton({
  state,
  type,
  name,
  value,
  checked,
  onChange,
  label,
  labelClassName,
  theme = 'dark',
}: RadioButtonProps) {
  return (
    <label
      className={`${s[`label${type}`]} ${
        state && s[`label${type}--${state}`]
      } ${s[`label${type}--${theme}`]} ${labelClassName}`}
    >
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
