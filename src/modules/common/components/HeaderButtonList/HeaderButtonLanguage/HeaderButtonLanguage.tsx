import { useState } from 'react';
import { ICONS } from 'theme/icons.const';
import { HeaderPopupLanguage } from './HeaderPopupLanguage';
import { HeaderButton } from 'ui-kit/index';

export const HeaderButtonLanguage = () => {
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const mouseEnterHandler = () => {
    setPopup(<HeaderPopupLanguage />);
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={<ICONS.UKRAINE />}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
