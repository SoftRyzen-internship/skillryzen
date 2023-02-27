import { useState } from 'react';

import { Logo, Steps } from '../../../../ui-kit';
import { AuthForm } from '../../../dashboard/components/AuthForm/AuthForm';

import s from './AuthSteps.module.scss';

export const AuthSteps = () => {
  const [step, setStep] = useState(3);

  return (
    <section className={s.section}>
      <Logo content='SkillRyzen' />
      <Steps currentStep={step} />
      <AuthForm currentStep={step} />
    </section>
  );
};
