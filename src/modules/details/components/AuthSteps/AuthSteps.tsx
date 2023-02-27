import { Logo, Steps } from '@ui-kit/index';
import { AuthForm } from '../AuthForm/AuthForm';

import s from './AuthSteps.module.scss';

export const AuthSteps = () => {
  return (
    <section className={s.section}>
      <Logo content='SkillRyzen' />
      <Steps currentStep={1} />
      <AuthForm />
    </section>
  );
};
