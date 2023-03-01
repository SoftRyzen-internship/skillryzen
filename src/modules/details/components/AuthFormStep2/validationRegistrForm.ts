import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Некоректна адреса електронної пошти')
    // eslint-disable-next-line quotes
    .required("Електронна пошта є обов'язковою")
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
    // eslint-disable-next-line quotes
    .required("Пароль є обов'язковим"),
});
