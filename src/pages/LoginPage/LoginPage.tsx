import { AuthWrapper } from 'modules/wrappers/AuthWrapper/AuthWrapper';
import { LoginForm } from 'modules/forms';

const LoginPage = () => {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
};

export default LoginPage;
