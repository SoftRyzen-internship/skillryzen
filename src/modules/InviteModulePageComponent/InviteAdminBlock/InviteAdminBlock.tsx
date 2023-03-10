import { InviteByEmailBlock } from './InviteByEmailBlock';
import { InviteByLinkBlock } from './InviteByLinkBlock';

import s from './InviteAdminBlock.module.scss';

export const InviteAdminBlock = () => {
  return (
    <div className={s.wrapper}>
      <InviteByEmailBlock />
      <InviteByLinkBlock />
    </div>
  );
};
