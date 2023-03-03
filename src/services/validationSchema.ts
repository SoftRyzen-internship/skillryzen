import * as Yup from 'yup';

export const registerSchema = Yup.object({
  email: Yup.string()
    .email('Некоректна адреса електронної пошти')
    .required('Електронна пошта є обов\'язковою')
    .max(63, 'Електронна адреса має містити не більше 63 символів')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      'Невірна адреса електронної пошти'
    )
    .matches(
      /^[^.-].*[^.-]$/,
      'Електронна пошта не повинна починатися або закінчуватися крапкою чи дефісом'
    ),
  password: Yup.string()
    .min(8, 'Пароль повинен містити мінімум 8 символів')
    .test(
      'has-spaces',
      'Пробіли заборонені в паролі',
      (value) => !/\s/.test(value)
    )
    .required('Пароль є обов\'язковим'),
  checkbox: Yup.boolean().oneOf([true]).required(),
});

export const contactInfoSchema = Yup.object({
  companyName: Yup.string()
    .min(2, 'Повинно містити біле 2 символів')
    .max(50, 'Повинно містити не більше 50 символів'),
  name: Yup.string()
    .required('Ім\'я є обовязковим')
    .min(2, 'Повинно містити біле 2 символів')
    .max(50, 'Повинно містити не більше 50 символів'),
  surname: Yup.string()
    .required('Прізвище є обовязковим')
    .min(2, 'Повинно містити біле 2 символів')
    .max(50, 'Повинно містити не більше 50 символів'),
  phone: Yup.string()
    .transform((value, originalValue) => {
      return originalValue
        ? originalValue.replace(/ /g, '').replace(/_/g, '')
        : '';
    })
    .matches(
      /((\+38)\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/,
      'Невірний формат телефону'
    )
    .required('Номер телефону є обов\'язковим'),
});
