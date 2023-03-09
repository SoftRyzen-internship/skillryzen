import { SelectTestBlock } from './SelectTestBlock';
import { InviteByLinkBlock } from './InviteByLinkBlock';
import { InviteByEmailBlock } from './InviteByEmailBlock';

import s from './InviteStudentBlock.module.scss';

export const InviteStudentBlock = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.subWrapper}>
        <SelectTestBlock />
        <InviteByLinkBlock />
      </div>
      <InviteByEmailBlock />
    </div>
  );
};
