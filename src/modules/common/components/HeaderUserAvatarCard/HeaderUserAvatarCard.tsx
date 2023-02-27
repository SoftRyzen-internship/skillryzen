import React, { useState } from 'react';
import { IMGS } from '@theme/images.const';
import { HeaderUserAvatarCardPopup } from './HeaderUserAvatarCardPopup';
import { UserAvatarCard } from '@ui-kit/index';

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
  const mouseEnterHandler = () => {
    setPopup(<HeaderUserAvatarCardPopup />);
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
        userRole='Admin'
        userAvatarUrl={IMGS.JAVA_SCRIPT}
        userStatus='green'
      />
      {popup ? <div className={s.popup}>{popup}</div> : null}
    </div>
  );
};
