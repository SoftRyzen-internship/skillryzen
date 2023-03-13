import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { logOut } from 'redux/authSlice/operations';
import { useAppDispatch } from 'hooks/hook';

import { LogOutStart } from 'modules/Modals/LogOut/LogOutStart';
import { LogOutFinish } from 'modules/Modals/LogOut/LogOutFinish';

import { useThemeContext } from 'context/themeContext';

import { ROUTES } from 'routes/routes.const';
import { ICONS } from 'ui-kit/icons';

import { randomAvatar } from 'utils/randomAvatar';
import { randomName } from 'utils/randomName';

import { UserAvatarCard, Popup, Modal } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';

import s from './HeaderUserAvatarCard.module.scss';

export const HeaderUserAvatarCard = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isClickLogOutBtn, setIsClickLogOutBtn] = useState(false);
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const name = useMemo(randomName, []);
  const avatar = useMemo(randomAvatar, []);

  const iconColor = {
    dark: 'var(--primary-txt-cl)',
    light: 'var(--accent-cl)',
  };

  const handleClickModal = () => {
    setIsShowModal((prevState) => !prevState);
  };

  const handleClickPopupItem = (text: string) => {
    if (text === t('header.userAvatar.logOut')) {
      handleClickModal();
    }
  };

  const handleClickLogOutBtn = () => {
    setIsClickLogOutBtn(true);
    dispatch(logOut());
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        theme={theme}
        handleClickItem={handleClickPopupItem}
        list={[
          {
            icon: <ICONS.USER stroke={iconColor[theme]} />,
            text: t('header.userAvatar.profile'),
            path: ROUTES.PROFILE,
          },
          {
            icon: <ICONS.SETTINGS stroke={iconColor[theme]} />,
            text: t('header.userAvatar.settings'),
            path: ROUTES.PROFILE_SETTINGS,
          },
          {
            icon: <ICONS.BELL_TWO stroke={iconColor[theme]} />,
            text: t('header.userAvatar.notifications'),
            path: ROUTES.NOTIFICATIONS,
          },
          {
            icon: <ICONS.COIN fill={iconColor[theme]} />,
            text: t('header.userAvatar.coins'),
            path: ROUTES.COINS,
          },
          {
            icon: <ICONS.LOGOUT stroke={iconColor[theme]} />,
            text: t('header.userAvatar.logOut'),
          },
        ]}
      />
    );
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };

  return (
    <div
      className={s.container}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <UserAvatarCard
        userName={name}
        userAvatarUrl={avatar}
        // userStatus='green'
        theme={theme}
      />
      {popup ? <div className={s.popup}>{popup}</div> : null}
      {isShowModal && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          {!isClickLogOutBtn ? (
            <LogOutStart
              onClick={handleClickModal}
              handleClickLogOutBtn={handleClickLogOutBtn}
            />
          ) : (
            <LogOutFinish onClick={handleClickModal} />
          )}
        </Modal>
      )}
    </div>
  );
};
