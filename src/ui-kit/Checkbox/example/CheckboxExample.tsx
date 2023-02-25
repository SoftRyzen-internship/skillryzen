import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';

import s from './CheckboxExample.module.scss';

export default function RadioButtonExample() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  const handleCheckboxChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked1(event.target.checked);
  };
  const handleCheckboxChange2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked2(event.target.checked);
  };
  const handleCheckboxChange3 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked3(event.target.checked);
  };
  const handleCheckboxChange4 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked4(event.target.checked);
  };
  return (
    <div style={{ backgroundColor: '#0A0E29', color: '#F8F8F8' }}>
      <h2 style={{ margin: '10px' }}>Checkbox</h2>

      <p style={{ marginBottom: '10px' }}>Checkbox without label</p>
      <Checkbox checked={isChecked1} onChange={handleCheckboxChange1} />
      <p style={{ margin: '10px' }}>
        Selected: {isChecked1 ? 'true' : 'false'}
      </p>

      <p style={{ marginBottom: '10px' }}>Checkbox with form label</p>
      <Checkbox
        type='form'
        label='Checkbox label for form'
        checked={isChecked2}
        onChange={handleCheckboxChange2}
      />
      <p style={{ margin: '10px' }}>
        Selected: {isChecked2 ? 'true' : 'false'}
      </p>

      <p style={{ marginBottom: '10px' }}>Checkbox with filter label</p>
      <Checkbox
        type='filter'
        label='Checkbox label for filter '
        checked={isChecked3}
        onChange={handleCheckboxChange3}
      />
      <p style={{ margin: '10px' }}>
        Selected: {isChecked3 ? 'true' : 'false'}
      </p>

      <p style={{ marginBottom: '10px' }}>Checkbox with custom label</p>
      <Checkbox
        type='custom'
        label='Checkbox with custom label'
        labelClassName={s.labelCustom}
        checked={isChecked4}
        onChange={handleCheckboxChange4}
        checkboxColor='red'
        checkedColor='green'
      />
      <p style={{ margin: '10px' }}>
        Selected: {isChecked4 ? 'true' : 'false'}
      </p>
    </div>
  );
}
