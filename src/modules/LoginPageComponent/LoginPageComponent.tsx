import { AuthWrapper } from 'modules/wrappers/AuthWrapper/AuthWrapper';
import { Login } from './Login/Login';

export const LoginPageComponent = () => {
  return (
    <AuthWrapper>
      <Login />
    </AuthWrapper>
  );
};
