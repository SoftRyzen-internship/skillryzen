import { Spinner } from 'modules/common/components';

import container from 'modules/dashboard/components/AuthSteps/AuthSteps.module.scss';

export const AuthFormStep4 = () => {
  return (
    <div className={container.formWrapper}>
      <h2 className={container.formTitle}>Congratulations, Lorem!</h2>
      <p className={container.logIn}>lorem lorem lorem</p>
      <Spinner />
    </div>
  );
};
