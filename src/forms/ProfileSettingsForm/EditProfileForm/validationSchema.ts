import * as Yup from 'yup';

export const validationSchema = Yup.object({
  companyName: Yup.string()
    .min(2, 'Повинно містити біле 2 символів')
    .max(50, 'Повинно містити не більше 50 символів'),
  name: Yup.string()
    .required('Ім`я є обовязковим')
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
      // eslint-disable-next-line no-useless-escape
      /((\+38)\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/,
      'Невірний формат телефону'
    )
    .required('Номер телефону є обов`язковим'),
  linkedin: Yup.string()
    .url('LinkedIn URL повинна бути дійсним URL')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /linkedin\.com\/in\/([A-Za-z0-9\-]+)\/?$/,
      'Будь ласка, введіть дійсну LinkedIn URL профілю'
    ),
  telegram: Yup.string()
    .matches(
      /^[a-zA-Z_]/,
      'Telegram-адреса повинна починатися з літери або знаку підкреслення.'
    )
    .matches(
      /[a-zA-Z0-9_]*$/,
      'Telegram-адреса повинна закінчуватися літерою, цифрою або знаком підкреслення.'
    )
    .matches(/^(?!.*[@])/, 'Telegram-адреса не повинна містити символ @.')
    .matches(
      /[a-zA-Z]/,
      'Telegram-адреса повинна містити як мінімум одну літеру.'
    )
    .min(5, 'Telegram-адреса повинна містити не менше 5 символів.')
    .max(32, 'Telegram-адреса повинна містити не більше 32 символів.'),
});
