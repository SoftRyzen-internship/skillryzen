import { useState } from 'react';

import { COLORS } from 'theme/colors.const';
import { ICONS } from 'theme/icons.const';

import { HeaderButton } from 'ui-kit/index';

import { HeaderPopupNotification } from './HeaderPopupNotification';

export const HeaderButtonNotification = () => {
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const mouseEnterHandler = () => {
    setPopup(<HeaderPopupNotification />);
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={<ICONS.BELL fill={COLORS.bellIcon} />}
      IndicatorNumber={2}
      IndicatorColor='yellow'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
