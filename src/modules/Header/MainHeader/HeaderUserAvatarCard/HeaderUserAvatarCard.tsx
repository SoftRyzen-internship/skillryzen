import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { logOut } from 'redux/authSlice/operations';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { setClickLogOut } from 'redux/authSlice/authSlice';

import { LogOutStart } from 'modules/Modals/LogOut/LogOutStart';

import { useThemeContext } from 'context/themeContext';

import { USER_ROLE } from 'constans/consts';
import { ROUTES } from 'routes/routes.const';
import { ICONS } from 'ui-kit/icons';

import {
  getIsAuth,
  getUserName,
  getUserRole,
} from 'redux/authSlice/authSelectors';

import { randomAvatar } from 'utils/randomAvatar';

import { UserAvatarCard, Popup, Modal } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';

import s from './HeaderUserAvatarCard.module.scss';

const iconColor = {
  dark: 'var(--primary-txt-cl)',
  light: 'var(--accent-cl)',
};

export const HeaderUserAvatarCard = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const name = useAppSelector(getUserName);
  const role = useAppSelector(getUserRole);
  const isAuth = useAppSelector(getIsAuth);

  const avatar = useMemo(randomAvatar, []);

  const popupList = useMemo(() => {
    if (role === USER_ROLE.candidate) {
      return [
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
      ];
    }

    return [
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
        icon: <ICONS.LOGOUT stroke={iconColor[theme]} />,
        text: t('header.userAvatar.logOut'),
      },
    ];
  }, [role, t, theme]);

  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  const handleClickPopupItem = (text: string) => {
    if (text === t('header.userAvatar.logOut')) {
      handleClickModal();
    }
  };

  const handleClickLogOutBtn = async () => {
    dispatch(setClickLogOut(true));
    await dispatch(logOut());
    navigate(ROUTES.LOGIN);
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        theme={theme}
        handleClickItem={handleClickPopupItem}
        list={popupList}
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
        userStatus={isAuth ? 'green' : 'gray'}
        theme={theme}
      />
      {popup ? <div className={s.popup}>{popup}</div> : null}
      {isShowModal && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          <LogOutStart
            onClick={handleClickModal}
            handleClickLogOutBtn={handleClickLogOutBtn}
          />
        </Modal>
      )}
    </div>
  );
};
