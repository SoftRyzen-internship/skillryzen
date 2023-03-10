import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { logOut } from 'redux/authSlice/operations';
import { useAppDispatch } from 'hooks/hook';

import { LogOutStart } from 'modules/Modals/LogOut/LogOutStart';
import { LogOutFinish } from 'modules/Modals/LogOut/LogOutFinish';

import { useThemeContext } from 'context/themeContext';
import { getRandomInt } from 'utils/getRandomInt';

import { ROUTES } from 'routes/routes.const';
import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { UserAvatarCard, Popup, Modal } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';

import s from './HeaderUserAvatarCard.module.scss';

interface HeaderUserAvatarCardProps {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  popupContent?: React.ReactNode;
}

export const HeaderUserAvatarCard = ({
  className,
}: HeaderUserAvatarCardProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isClickLogOutBtn, setIsClickLogOutBtn] = useState(false);
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const defaultAvatars = [
    IMAGES.BLUE_AVATAR,
    IMAGES.GREEN_AVATAR,
    IMAGES.RED_AVATAR,
    IMAGES.YELLOW_AVATAR,
  ];

  const defaultNames = [
    'Тіньовий QA',
    'Скритий Девелопер',
    'Анонімний Дизайнер',
    'Невідомий Тестувальник',
    'Секретний Кодер',
    'Неіменований Графічний дизайнер',
    'Прихований Розробник',
    'Невідомий UX/UI дизайнер',
    'Анонімний Архітектор',
    'Загадковий Аналітик',
  ];

  const [name, setName] = useState(
    defaultNames[getRandomInt(defaultNames.length - 1)]
  );
  const [avatar, setAvatar] = useState(
    defaultAvatars[getRandomInt(defaultAvatars.length - 1)]
  );

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
    // console.log('YOU ARE LOGOUT');
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
      className={className ? `${s.container} ${className}` : s.container}
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
