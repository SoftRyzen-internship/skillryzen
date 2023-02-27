import { useState } from 'react';
import { Bell } from '@theme/icons.const';
import { HeaderPopupNotification } from './HeaderPopupNotification';
import { HeaderButton } from '@ui-kit/index';

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
      icon={<Bell color='#F8F8F8' size='24px' />}
      IndicatorNumber={2}
      IndicatorColor='yellow'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
