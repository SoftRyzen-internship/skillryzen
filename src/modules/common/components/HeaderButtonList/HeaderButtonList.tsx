import { HeaderButtonTheme } from '@modules/common/components/HeaderButtonList/HeaderButtonTheme';
import { HeaderButtonLanguage } from '@modules/common/components/HeaderButtonList/HeaderButtonLanguage';
import { HeaderButtonCoin } from '@modules/common/components/HeaderButtonList/HeaderButtonCoin';
import { HeaderButtonNotification } from '@modules/common/components/HeaderButtonList/HeaderButtonNotification';

import s from './HeaderButtonList.module.scss';

export const HeaderButtonList = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <HeaderButtonTheme />
      </li>
      <li className={s.item}>
        <HeaderButtonLanguage />
      </li>
      <li className={s.item}>
        <HeaderButtonCoin />
      </li>
      <li className={s.item}>
        <HeaderButtonNotification />
      </li>
    </ul>
  );
};
