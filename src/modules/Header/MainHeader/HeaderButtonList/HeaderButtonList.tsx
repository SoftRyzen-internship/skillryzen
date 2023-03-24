import { useCurrentWidth, useAppSelector } from 'hooks';
import { getUserRole } from 'redux/authSlice/authSelectors';

import { USER_ROLE } from 'constans/consts';

import { HeaderButtonTheme } from './HeaderButtonTheme';
import { HeaderButtonLanguage } from './HeaderButtonLanguage';
import { HeaderButtonCoin } from './HeaderButtonCoin';
import { HeaderButtonNotification } from './HeaderButtonNotification';
import { HeaderButtonCompanyLogo } from './HeaderButtonCompanyLogo';
import { HeaderButtonSearch } from './HeaderButtonSearch';

import s from './HeaderButtonList.module.scss';

interface Props {
  showInput?: boolean;
  handleShowInput?: () => void;
}

export const HeaderButtonList = ({ showInput, handleShowInput }: Props) => {
  const role = useAppSelector(getUserRole);
  const currentWidth = useCurrentWidth();

  return (
    <ul className={s.list}>
      {currentWidth < 1280 && (
        <li>
          <HeaderButtonSearch active={showInput} onClick={handleShowInput} />
        </li>
      )}
      <li>
        <HeaderButtonTheme />
      </li>
      <li>
        <HeaderButtonLanguage />
      </li>
      {currentWidth > 767 && (
        <>
          {role === USER_ROLE.candidate && (
            <li>
              <HeaderButtonCoin />
            </li>
          )}
          <li>
            <HeaderButtonNotification />
          </li>
        </>
      )}
      {role !== USER_ROLE.candidate && (
        <li>
          <HeaderButtonCompanyLogo />
        </li>
      )}
    </ul>
  );
};
