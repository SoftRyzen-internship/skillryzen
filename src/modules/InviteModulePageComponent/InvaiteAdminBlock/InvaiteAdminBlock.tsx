import { InviteByEmailBlock } from './InviteByEmailBlock';
import { InviteByLinkBlock } from './InviteByLinkBlock';

import s from './InvaiteAdminBlock.module.scss';

export const InvaiteAdminBlock = () => {
  return (
    <div className={s.wrapper}>
      <InviteByEmailBlock />
      <InviteByLinkBlock />
    </div>
  );
};
