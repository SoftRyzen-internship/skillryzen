import { useState, FC } from 'react';

import s from './Checkbox.module.scss';
// import { CheckRound, DefaultCheckbox } from "../../theme";

import { ICONS } from '../../theme';

type CheckboxProps = {
  onChange?: undefined | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  initialState?: boolean;
  // checkboxColor?: `#${string}`;
  // checkedColor?: `#${string}`;
  // checkboxSize?: `${number}px`;
  type?: 'form' | 'filter' | 'custom' | '';
  labelClassName?: string;
  label?: string;
  id: string;
  name: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  onChange,
  initialState = false,
  // checkboxColor = COLORS.checkboxIcon,
  // checkedColor = COLORS.checkedCheckboxIcon,
  // checkboxSize = '16px',
  type = '',
  labelClassName = '',
  label,
  id,
  name,
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
          // <CheckRound color={checkedColor} size={checkboxSize} />
          <ICONS.DEFAULT_CHECKBOX className={s.checkboxColor} />
          // <DefaultCheckbox color={checkboxColor} size={checkboxSize} />
        )}
      </span>
      {label}
    </label>
  );
};
