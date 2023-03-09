import { SelectTestBlock } from './SelectTestBlock';
import { InviteByLinkBlock } from './InviteByLinkBlock';
import { InviteByEmailBlock } from './InviteByEmailBlock';

import s from './InvaiteStudentBlock.module.scss';

export const InvaiteStudentBlock = () => {
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
