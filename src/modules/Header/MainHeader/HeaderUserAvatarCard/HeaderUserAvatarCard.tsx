import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { UserAvatarCard, Popup } from 'ui-kit/index';

import s from './HeaderUserAvatarCard.module.scss';
import { IThemeContext } from 'constans/types';

interface HeaderUserAvatarCardProps {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  popupContent?: React.ReactNode;
}

export const HeaderUserAvatarCard = ({
  className,
}: HeaderUserAvatarCardProps) => {
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  const iconColor = {
    dark: 'var(--primary-txt-cl)',
    light: 'var(--accent-cl)',
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        theme={theme}
        list={[
          {
            icon: <ICONS.USER stroke={iconColor[theme]} />,
            text: t('header.userAvatar.profile'),
          },
          {
            icon: <ICONS.SETTINGS stroke={iconColor[theme]} />,
            text: t('header.userAvatar.settings'),
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
        userName='John Doe'
        userRole={t('header.admin')}
        userAvatarUrl={IMAGES.JAVA_SCRIPT}
        userStatus='green'
        theme={theme}
      />
      {popup ? <div className={s.popup}>{popup}</div> : null}
    </div>
  );
};
