import { InviteByEmail, InviteByLink, SelectTest } from '../Parts';

import s from './InviteStudentBlock.module.scss';

export const InviteStudentBlock = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.subWrapper}>
        <SelectTest />
        <InviteByLink userType='student' />
      </div>
      <InviteByEmail userType='student' />
    </div>
  );
};
