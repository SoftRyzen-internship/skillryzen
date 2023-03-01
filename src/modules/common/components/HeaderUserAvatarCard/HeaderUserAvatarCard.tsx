import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IMGS } from 'theme/images.const';
import { ICONS } from 'theme/icons.const';

import { UserAvatarCard, Popup } from 'ui-kit/index';

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
  const [popup, setPopup] = useState<null | React.ReactNode>(null);

  const { t } = useTranslation();

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        list={[
          {
            icon: <ICONS.USER stroke='var(--primary-txt-cl)' />,
            text: t('header.userAvatar.profile'),
          },
          {
            icon: <ICONS.SETTINGS stroke='var(--primary-txt-cl)' />,
            text: t('header.userAvatar.settings'),
          },
          {
            icon: <ICONS.LOGOUT stroke='var(--primary-txt-cl)' />,
            text: t('header.userAvatar.logOut'),
          },
        ]}
        vievAll={t('header.viewAll')}
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
        userAvatarUrl={IMGS.JAVA_SCRIPT}
        userStatus='green'
      />
      {popup ? <div className={s.popup}>{popup}</div> : null}
    </div>
  );
};
