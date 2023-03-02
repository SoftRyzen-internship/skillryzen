import React from 'react';

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
  containerClassName?: string;
};

export function RadioButton({
  state,
  type,
  name,
  value,
  checked,
  onChange,
  label,
}: RadioButtonProps) {
  return (
    <label
      className={`${s[`label${type}`]} ${state && s[`label${type}--${state}`]}`}
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
