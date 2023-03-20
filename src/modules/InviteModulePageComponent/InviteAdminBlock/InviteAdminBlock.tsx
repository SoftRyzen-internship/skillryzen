import { InviteByEmail, InviteByLink } from '../Parts';

import s from './InviteAdminBlock.module.scss';

export const InviteAdminBlock = () => {
  return (
    <div className={s.wrapper}>
      <InviteByEmail userType='admin' />
      <InviteByLink userType='admin' />
    </div>
  );
};
