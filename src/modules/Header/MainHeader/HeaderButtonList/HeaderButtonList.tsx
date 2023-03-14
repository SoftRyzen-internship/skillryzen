import { useAppSelector } from 'hooks/hook';
import { getUserRole } from 'redux/authSlice/authSelectors';

import { USER_ROLE } from 'constans/consts';

import { HeaderButtonTheme } from './HeaderButtonTheme';
import { HeaderButtonLanguage } from './HeaderButtonLanguage';
import { HeaderButtonCoin } from './HeaderButtonCoin';
import { HeaderButtonNotification } from './HeaderButtonNotification';
import { HeaderButtonCompanyLogo } from './HeaderButtonCompanyLogo';

import s from './HeaderButtonList.module.scss';

export const HeaderButtonList = () => {
  const role = useAppSelector(getUserRole);

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <HeaderButtonTheme />
      </li>

      <li className={s.item}>
        <HeaderButtonLanguage />
      </li>

      {role === USER_ROLE.candidate && (
        <li className={s.item}>
          <HeaderButtonCoin />
        </li>
      )}

      <li className={s.item}>
        <HeaderButtonNotification />
      </li>
      {role !== USER_ROLE.candidate && (
        <li className={s.item}>
          <HeaderButtonCompanyLogo />
        </li>
      )}
    </ul>
  );
};
