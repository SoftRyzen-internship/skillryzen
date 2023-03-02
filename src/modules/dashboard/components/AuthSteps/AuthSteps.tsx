import { useAppSelector } from 'hooks/hook';
import { Logo, Steps } from 'ui-kit';
import {
  AuthFormStep1,
  AuthFormStep2,
  AuthFormStep3,
  AuthFormStep4,
} from 'modules/details';

import s from './AuthSteps.module.scss';

export const AuthSteps = () => {
  const step = useAppSelector((state) => state.auth.step);

  return (
    <section className={s.section}>
      <Logo content='SkillRyzen' />
      <Steps currentStep={step} />
      {step === 1 && <AuthFormStep1 />}
      {step === 2 && <AuthFormStep2 />}
      {step === 3 && <AuthFormStep3 />}
      {step === 4 && <AuthFormStep4 />}
    </section>
  );
};
