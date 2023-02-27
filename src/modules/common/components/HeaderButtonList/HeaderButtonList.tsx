import { HeaderButtonTheme } from './HeaderButtonTheme';
import { HeaderButtonLanguage } from './HeaderButtonLanguage';
import { HeaderButtonCoin } from './HeaderButtonCoin';
import { HeaderButtonNotification } from './HeaderButtonNotification';

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
