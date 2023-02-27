import React, { useState } from 'react';
import { COLORS } from '../../theme/colors.const';
import { CheckRound, DefaultCheckbox } from '@theme/icons.const';

import s from './Checkbox.module.scss';

type CheckboxProps = {
  onChange?: undefined | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  initialState?: boolean;
  checkboxColor?: `#${string}`;
  checkedColor?: `#${string}`;
  checkboxSize?: `${number}px`;
  type?: 'form' | 'filter' | 'custom' | '';
  labelClassName?: string;
  label?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  initialState = false,
  checkboxColor = COLORS.checkboxIcon,
  checkedColor = COLORS.checkedCheckboxIcon,
  checkboxSize = '16px',
  type = '',
  labelClassName = '',
  label,
}) => {
  const [checked, setChecked] = useState(initialState);

  const labelClass = (type: 'form' | 'filter' | 'custom' | '') => {
    switch (type) {
      case 'form':
        return `${s.label} ${s.labelForm}`;
      case 'filter':
        return `${s.label} ${s.labelFilter}`;

      case 'custom':
        return `${s.label} ${labelClassName}`;

      default:
        return `${s.label}`;
    }
  };
  return (
    <label className={labelClass(type)}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => {
          setChecked((prev) => !prev);
          if (onChange) {
            onChange(e);
          }
        }}
      />
      <span className={s.checkbox}>
        {checked ? (
          <CheckRound color={checkedColor} size={checkboxSize} />
        ) : (
          <DefaultCheckbox color={checkboxColor} size={checkboxSize} />
        )}
      </span>
      {label}
    </label>
  );
};
