import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';

import { RegisterContactsForm } from 'modules/forms/RegisterContactsForm/RegisterContactsForm';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const ThirdStep = () => {
  const dispatch = useAppDispatch();

  const handleClickSkipBtn = () => {
    dispatch(setStep(4));
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>
        Give us more <br />
        information about you!
      </h2>
      <p className={s.logIn}>Lorem lorem</p>
      <RegisterContactsForm />
      <button onClick={handleClickSkipBtn} className={s.skipBtn} type='button'>
        Do this later
      </button>
    </div>
  );
};
