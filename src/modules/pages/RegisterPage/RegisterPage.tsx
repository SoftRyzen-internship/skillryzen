import { AuthIntro, AuthContainer } from '@modules/dashboard';
import { AuthSteps } from '@modules/details';

const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthIntro />
      <AuthSteps />
    </AuthContainer>
  );
};

export default RegisterPage;
