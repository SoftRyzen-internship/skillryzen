import { useAppSelector } from 'hooks/hook';
import { Logo, Steps } from 'ui-kit';
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
} from 'modules/RegisterPageComponent';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const RegisterSteps = () => {
  const step = useAppSelector((state) => state.auth.step);

  return (
    <section className={s.section}>
      <Logo content='SkillRyzen' />
      <Steps currentStep={step} />
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <ThirdStep />}
      {step === 4 && <FourthStep />}
    </section>
  );
};
