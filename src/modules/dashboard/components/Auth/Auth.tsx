import { useState } from 'react';

import { AuthIntro, AuthSteps } from 'modules/dashboard';

import s from './Auth.module.scss';
import { HeaderButtonLanguage } from 'modules/common/components/HeaderButtonList/HeaderButtonLanguage';
import { HeaderButtonTheme } from 'modules/common/components/HeaderButtonList/HeaderButtonTheme';

export const Auth = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('candidate');

  return (
    <main className={s.container}>
      <div className={s.settings}>
        <HeaderButtonLanguage />
        <HeaderButtonTheme />
      </div>
      {step < 3 && <AuthIntro role={role} />}
      <AuthSteps step={step} setStep={setStep} role={role} setRole={setRole} />
    </main>
  );
};
