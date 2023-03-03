import { RegisterSteps } from 'modules/RegisterPageComponent';
import { AuthWrapper } from 'modules/wrappers/AuthWrapper/AuthWrapper';

export const RegisterPageComponent = () => {
  return (
    <AuthWrapper>
      <RegisterSteps />
    </AuthWrapper>
  );
};
