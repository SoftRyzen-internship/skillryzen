import s from './AuthFormStep3.module.scss';
import { AuthButton, Input } from '../../../../ui-kit/index';
import React, { useState } from 'react';

interface FormValues {
  name: string;
  surname: string;
  phone: string;
}

const initialValues: FormValues = {
  name: '',
  surname: '',
  phone: '',
};

export const AuthFormStep3 = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState({
    name: '',
    surname: '',
    phone: '',
  });

  const handleClick = () => {};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
    if (value === '') {
      setFormErrors({ ...formErrors, [name]: `${name} не може бути порожнім` });
    } else {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  return (
    <form action=''>
      <ul>
        <li className={s.list__item}>
          <Input
            onChange={handleChange}
            className={s.codeInput}
            name='name'
            placeholder='Name'
            value={values.name}
          />
          <span>{formErrors.name}</span>
        </li>
        <li className={s.list__item}>
          <Input
            onChange={handleChange}
            className={s.codeInput}
            name='surname'
            placeholder='Surname'
            value={values.surname}
          />
          <span>{formErrors.surname}</span>
        </li>
        <li className={s.list__item}>
          <Input
            onChange={handleChange}
            className={s.codeInput}
            name='phone'
            placeholder='Phone'
            value={values.phone}
          />
          <span>{formErrors.phone}</span>
        </li>
      </ul>

      <AuthButton
        type='submit'
        text='Continue'
        size='small'
        color='grey'
        onClick={handleClick}
      />
    </form>
  );
};
