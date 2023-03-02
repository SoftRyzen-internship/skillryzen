import { AuthSteps } from 'modules/details';
import { AuthWrapper } from 'modules/wrappers/AuthWrapper/AuthWrapper';

const RegisterPage = () => {
  return (
    <AuthWrapper>
      <AuthSteps />
    </AuthWrapper>
  );
};

export default RegisterPage;
