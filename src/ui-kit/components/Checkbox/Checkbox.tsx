import { useState } from 'react';

import { ICONS } from 'ui-kit/icons';

import s from './Checkbox.module.scss';

type CheckboxProps = {
  onChange?: undefined | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  initialState?: boolean;
  type?: 'form' | 'filter' | 'custom' | '';
  labelClassName?: string;
  label?: string;
  id: string;
  name: string;
};

export const Checkbox = ({
  onChange,
  initialState = false,
  type = '',
  labelClassName = '',
  label,
  id,
  name,
}: CheckboxProps) => {
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
        id={id}
        name={name}
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
          <ICONS.CHECK_ROUND />
        ) : (
          <ICONS.DEFAULT_CHECKBOX className={s.checkboxColor} />
        )}
      </span>
      {label}
    </label>
  );
};
