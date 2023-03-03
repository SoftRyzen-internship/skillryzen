import { useNavigate } from 'react-router';

import { Spinner } from 'modules/common/components';
import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';

import container from 'modules/dashboard/components/AuthSteps/AuthSteps.module.scss';
import { useEffect } from 'react';

export const AuthFormStep4 = () => {
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
    <div className={container.formWrapper}>
      <h2 className={container.formTitle}>Congratulations, Lorem!</h2>
      <p className={container.logIn}>lorem lorem lorem</p>
      <Spinner />
    </div>
  );
};
