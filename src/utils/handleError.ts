export interface Error {
  resp: any; // eslint-disable-line
  email: string;
  password: string;
}

export const handleError = ({ resp, email, password }: Error) => {
  const errorTitle = resp.payload?.data.title || '';
  const errorMsg = (resp.payload?.data.errors.code || '')
    .replaceAll('_', ' ')
    .toLowerCase();

  switch (errorTitle) {
  case 'UserException':
    email = errorMsg;
    password = '';
    break;
  case 'InvalidUserCredentialsException':
    email = '';
    password = errorMsg;
    break;
  default:
    email = 'Oops, something went wrong. Try again later';
    password = 'Oops, something went wrong. Try again later';
  }

  return { email, password };
};
