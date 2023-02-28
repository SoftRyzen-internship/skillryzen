import React from 'react';

import s from './RadioButton.module.scss';

type RadioButtonProps = {
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  labelClassName?: string;
  label?: string;
  containerClassName?: string;
};

export function RadioButton({
  value,
  checked,
  onChange,
  label,
  labelClassName = '',
  containerClassName = '',
}: RadioButtonProps) {
  return (
    <div className={containerClassName ? containerClassName : s.container}>
      <label className={`${labelClassName} ${s.label}`}>
        <input
          type='radio'
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className={s.radio}></span>
        {label}
      </label>
    </div>
  );
}
