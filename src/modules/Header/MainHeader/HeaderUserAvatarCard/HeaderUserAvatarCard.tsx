import { useMemo, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import {
  useCurrentWidth,
  useOutsideClick,
  useAppDispatch,
  useAppSelector,
} from 'hooks';

import { logOut } from 'redux/authSlice/operations';
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
  const ref = useRef<HTMLDivElement>();
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
  const currentWidth = useCurrentWidth();

  useOutsideClick(ref, setPopup);

  const popupList = useMemo(() => {
    if (role === USER_ROLE.candidate) {
      return [
        {
          id: 'profile',
          icon: <ICONS.USER stroke={iconColor[theme]} />,
          text: t('header.userAvatar.profile'),
          path: ROUTES.PROFILE,
        },
        {
          id: 'settings',
          icon: <ICONS.SETTINGS stroke={iconColor[theme]} />,
          text: t('header.userAvatar.settings'),
          path: ROUTES.PROFILE_SETTINGS,
        },
        {
          id: 'notifications',
          icon: <ICONS.BELL_TWO stroke={iconColor[theme]} />,
          text: t('header.userAvatar.notifications'),
          path: ROUTES.NOTIFICATIONS,
        },
        {
          id: 'coins',
          icon: <ICONS.COIN fill={iconColor[theme]} />,
          text: t('header.userAvatar.coins'),
          path: ROUTES.COINS,
        },
        {
          id: 'logOut',
          icon: <ICONS.LOGOUT stroke={iconColor[theme]} />,
          text: t('header.userAvatar.logOut'),
        },
      ];
    }

    return [
      {
        id: 'profile',
        icon: <ICONS.USER stroke={iconColor[theme]} />,
        text: t('header.userAvatar.profile'),
        path: ROUTES.PROFILE,
      },
      {
        id: 'settings',
        icon: <ICONS.SETTINGS stroke={iconColor[theme]} />,
        text: t('header.userAvatar.settings'),
        path: ROUTES.PROFILE_SETTINGS,
      },
      {
        id: 'notifications',
        icon: <ICONS.BELL_TWO stroke={iconColor[theme]} />,
        text: t('header.userAvatar.notifications'),
        path: ROUTES.NOTIFICATIONS,
      },
      {
        id: 'logOut',
        icon: <ICONS.LOGOUT stroke={iconColor[theme]} />,
        text: t('header.userAvatar.logOut'),
      },
    ];
  }, [role, t, theme]);

  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  const handleClickPopupItem = (id: string) => {
    if (id === 'logOut') {
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

  const handleClick = () => {
    if (popup) return setPopup(null);
    setPopup(
      <Popup
        theme={theme}
        handleClickItem={handleClickPopupItem}
        list={popupList}
      />
    );
  };

  return (
    <div
      ref={ref}
      className={s.container}
      onMouseEnter={currentWidth > 1279 ? mouseEnterHandler : null}
      onMouseLeave={currentWidth > 1279 ? mouseLeaveHandler : null}
      onClick={currentWidth < 1279 ? handleClick : null}
    >
      <UserAvatarCard
        userName={currentWidth > 1279 ? name : ''}
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
