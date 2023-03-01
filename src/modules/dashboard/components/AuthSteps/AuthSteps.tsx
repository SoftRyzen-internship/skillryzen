import { Logo, Steps } from 'ui-kit';
import {
  AuthFormStep1,
  AuthFormStep2,
  AuthFormStep3,
  AuthFormStep4,
} from 'modules/details';

import s from './AuthSteps.module.scss';

import { IAuth } from 'modules/common/types';

export const AuthSteps = ({ step, setStep, role, setRole }: IAuth) => {
  return (
    <section className={s.section}>
      <Logo content='SkillRyzen' />
      <Steps currentStep={step} />
      {step === 1 && (
        <AuthFormStep1 setStep={setStep} setRole={setRole} role={role} />
      )}
      {step === 2 && <AuthFormStep2 setStep={setStep} role={role} />}
      {step === 3 && <AuthFormStep3 setStep={setStep} role={role} />}
      {step === 4 && <AuthFormStep4 />}
    </section>
  );
};
