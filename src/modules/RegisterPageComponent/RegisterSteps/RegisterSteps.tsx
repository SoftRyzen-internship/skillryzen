import { useAppSelector } from 'hooks/hook';
import { getStep, getUserRole } from 'redux/authSlice/authSelectors';

import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
} from 'modules/RegisterPageComponent';

import { Logo, Steps } from 'ui-kit';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const RegisterSteps = () => {
  const step = useAppSelector(getStep);
  const role = useAppSelector(getUserRole);

  return (
    <section className={s.section}>
      <div className={s.logo}>
        <Logo content='SkillRyzen' />
      </div>
      {role === 'CANDIDATE' ? (
        <Steps steps={3} currentStep={step} />
      ) : (
        <Steps steps={4} currentStep={step} />
      )}
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <ThirdStep />}
      {step === 4 && <FourthStep />}
    </section>
  );
};
