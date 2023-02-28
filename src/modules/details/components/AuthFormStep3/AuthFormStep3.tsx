import s from './AuthFormStep3.module.scss';
import { AuthButton, Input } from '../../../../ui-kit/index';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ICONS } from 'theme';

interface FormValues {
  name: string;
  surname: string;
  phone: string;
}

export const AuthFormStep3 = () => {
  const [hasValue, setHasValue] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Ім'я є обовязковим")
        .min(2, 'Повинно містити біле 2 символів')
        .max(50, 'Повинно містити не більше 50 символів')
        .matches(
          /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{2,50})$/,
          'Невірна адреса імені'
        ),
      surname: Yup.string()
        .required('Прізвище є обовязковим')
        .min(2, 'Повинно містити біле 2 символів')
        .max(50, 'Повинно містити не більше 50 символів')
        .matches(
          /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{2,50})$/,
          'Невірна адреса імені'
        ),
      password: Yup.string()
        .min(8, 'Пароль повинен містити мінімум 8 символів')
        .required("Пароль є обов'язковим"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  const { name, surname, phone } = values;

  const handleInputChange = (event: { target: { value: string } }) => {
    handleChange(event);
    setHasValue(event.target.value !== '');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        {/* ПЕРШИЙ ІНПУТ */}
        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.name && errors.name && (
            <>
              <div className={s.errorMsg}>{errors.name}</div>
            </>
          )}
          <input
            className={`${s.input} ${
              touched.name && errors.name ? s.inputError : ''
            } ${touched.name && !errors.name ? s.inputValid : ''}`}
            name='name'
            type='text'
            id='name'
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={name}
            autoComplete='name'
          />
          <label
            className={`${s.floatingLabel} ${
              touched.name && errors.name ? s.floatingLabelError : ''
            } ${touched.name && !errors.name ? s.floatingLabelValid : ''}`}
            htmlFor='name'
          >
            Name
          </label>
        </div>
        {/* Другий ІНПУТ */}

        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.surname && errors.surname && (
            <>
              <div className={s.errorMsg}>{errors.surname}</div>
            </>
          )}
          <input
            className={`${s.input} ${
              touched.surname && errors.surname ? s.inputError : ''
            } ${touched.surname && !errors.surname ? s.inputValid : ''}`}
            name='surname'
            type='text'
            id='surname'
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={surname}
            autoComplete='surname'
          />
          <label
            className={`${s.floatingLabel} ${
              touched.surname && errors.surname ? s.floatingLabelError : ''
            } ${
              touched.surname && !errors.surname ? s.floatingLabelValid : ''
            }`}
            htmlFor='surname'
          >
            Surname
          </label>
        </div>

        <div className={`${s.floatingGroup} ${hasValue ? s.hasValue : ''}`}>
          {touched.phone && errors.phone && (
            <>
              <div className={s.errorMsg}>{errors.phone}</div>
            </>
          )}
          <input
            className={`${s.input} ${s.inputPhone} ${
              touched.phone && errors.phone ? s.inputError : ''
            } ${touched.phone && !errors.phone ? s.inputValid : ''}`}
            name='phone'
            type='number'
            id='phone'
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={phone}
            autoComplete='off'
          />
          <label
            className={`${s.floatingLabel} ${s.floatingLabelPhone} ${
              touched.phone && errors.phone ? s.floatingLabelError : ''
            } ${touched.phone && !errors.phone ? s.floatingLabelValid : ''}`}
            htmlFor='phone'
          >
            Phone
          </label>
          <button
            type='button'
            onClick={() => console.log(`klikc`)}
            className={`${s.showPasswordButton} ${
              touched.phone && errors.phone ? s.showPasswordButtonError : ''
            } ${
              touched.phone && !errors.phone ? s.showPasswordButtonValid : ''
            }`}
          >
            {/* {showPassword ? (
              <ICONS.EYE_CLOSED
                className={`${s.iconEye} ${
                  touched.password && errors.password ? s.iconEyeError : ''
                } ${
                  touched.password && !errors.password ? s.iconEyeValid : ''
                }`}
              />
            ) : (
              <ICONS.EYE_OPEN
                className={`${s.iconEye} ${
                  touched.password && errors.password ? s.iconEyeError : ''
                } ${
                  touched.password && !errors.password ? s.iconEyeValid : ''
                }`}
              />
            )} */}
            <ICONS.UKRAINE />
          </button>
        </div>
      </form>
    </>
  );
};
// export const AuthFormStep3 = () => {
//   const [values, setValues] = useState<FormValues>({
//     name: '',
//     surname: '',
//     phone: '',
//   });
//   const [formErrors, setFormErrors] = useState({
//     name: '',
//     surname: '',
//     phone: '',
//   });

//   const handleClick = () => {};
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setValues((prevState) => ({ ...prevState, [name]: value }));
//     if (value === '') {
//       setFormErrors({ ...formErrors, [name]: `${name} не може бути порожнім` });
//     } else {
//       setFormErrors({ ...formErrors, [name]: '' });
//     }
//   };

//   return (
//     <form action=''>
//       <ul>
//         <li className={s.list__item}>
//           <Input
//             onChange={handleChange}
//             className={s.codeInput}
//             name='name'
//             placeholder='Name'
//             value={values.name}
//           />
//           <span>{formErrors.name}</span>
//         </li>
//         <li className={s.list__item}>
//           <Input
//             onChange={handleChange}
//             className={s.codeInput}
//             name='surname'
//             placeholder='Surname'
//             value={values.surname}
//           />
//           <span>{formErrors.surname}</span>
//         </li>
//         <li className={s.list__item}>
//           <Input
//             onChange={handleChange}
//             className={s.codeInput}
//             name='phone'
//             placeholder='Phone'
//             value={values.phone}
//           />
//           <span>{formErrors.phone}</span>
//         </li>
//       </ul>

//       <AuthButton
//         type='submit'
//         text='Continue'
//         size='small'
//         onClick={handleClick}
//         disabled //додав дізейблд, його треба зробити в залежності від того чи пройшов ти валідацію чи ні
//       />
//     </form>
//   );
// };
