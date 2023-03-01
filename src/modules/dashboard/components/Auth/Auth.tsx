import { useState } from 'react';

import { AuthIntro, AuthSteps } from 'modules/dashboard';

import s from './Auth.module.scss';

export const Auth = () => {
  const [step, setStep] = useState(3);
  const [role, setRole] = useState('candidate');

  return (
    <main className={s.container}>
      {step < 3 && <AuthIntro role={role} />}
      <AuthSteps step={step} setStep={setStep} role={role} setRole={setRole} />
    </main>
  );
};
