import * as Yup from 'yup';

export const validationSchema = Yup.object({
  companyName: Yup.string()
    .min(2, 'Повинно містити біле 2 символів')
    .max(30, 'Повинно містити не більше 30 символів'),
  name: Yup.string()
    .required('Ім`я є обовязковим')
    .min(2, 'Повинно містити біле 2 символів')
    .max(30, 'Повинно містити не більше 50 символів'),
  surname: Yup.string()
    .required('Прізвище є обовязковим')
    .min(2, 'Повинно містити біле 2 символів')
    .max(30, 'Повинно містити не більше 50 символів'),
  phone: Yup.string()
    .transform((value, originalValue) => {
      return originalValue
        ? originalValue.replace(/ /g, '').replace(/_/g, '')
        : '';
    })
    .matches(
      // eslint-disable-next-line
      /((\+38)\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/,
      'Невірний формат телефону'
    )
    .required('Номер телефону є обов`язковим'),
});
