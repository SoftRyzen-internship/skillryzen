import { Spinner } from 'modules/common/components';

import s2 from '../AuthSteps/AuthSteps.module.scss';

export const AuthFormStep4 = () => {
  return (
    <div className={s2.formWrapper}>
      <h2 className={s2.formTitle}>Congratulations, Lorem!</h2>
      <p className={s2.logIn}>lorem lorem lorem</p>
      <Spinner />
    </div>
  );
};
