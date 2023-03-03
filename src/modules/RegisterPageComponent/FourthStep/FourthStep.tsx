import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Spinner } from 'modules/common/components';
import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';

import s from '../RegisterSteps/RegisterSteps.module.scss';

export const FourthStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => navigate('/student'), 1000);
    return () => {
      clearTimeout(timerId);
      dispatch(setStep(1));
    };
  }, [navigate, dispatch]);

  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>Congratulations, Lorem!</h2>
      <p className={s.logIn}>lorem lorem lorem</p>
      <Spinner />
    </div>
  );
};
