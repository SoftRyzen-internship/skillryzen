import React from 'react';
import { COLORS } from '../../theme/colors.const';
import { CheckRound, DefaultCheckbox } from '@theme/icons.const';

import s from './Checkbox.module.scss';

type CheckboxProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'form' | 'filter' | 'custom' | '';
  labelClassName?: string;
  label?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  type = '',
  labelClassName = '',
  label,
}) => {
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
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span className={s.checkbox}>
        {checked ? (
          <CheckRound color={COLORS.checkedCheckboxIcon} size={'16px'} />
        ) : (
          <DefaultCheckbox color={COLORS.checkboxIcon} size={'16px'} />
        )}
      </span>
      {label}
    </label>
  );
};
