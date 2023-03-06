import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Введіть правильну електронну адресу')
    .required('Поле є обов`язковим'),
  currentPassword: Yup.string()
    .required('Поле є обов`язковим')
    .min(8, 'Мінімальна довжина пароля - 8 символів'),
  newPassword: Yup.string()
    .min(8, 'Мінімальна довжина пароля - 8 символів')
    .required('Поле є обов`язковим'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Паролі не співпадають')
    .required('Поле є обов`язковим'),
});
