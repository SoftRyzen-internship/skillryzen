export interface Error {
  t: any; // eslint-disable-line
  resp: any; // eslint-disable-line
  email: string;
  password: string;
}

export const handleError = ({ resp, email, password, t }: Error) => {
  const errorMsg = resp.payload?.data.errors.code || '';

  switch (errorMsg) {
  case 'USER_NOT_FOUND':
    email = t('auth.userNotFound');
    password = '';
    break;
  case 'USER_ALREADY_EXISTS':
    email = t('auth.userExists');
    password = '';
    break;
  case 'INVALID_CREDENTIALS':
    email = '';
    password = t('auth.passwordInvalid');
    break;
  default:
    email = t('auth.serverError');
    password = t('auth.serverError');
  }

  return { email, password };
};
