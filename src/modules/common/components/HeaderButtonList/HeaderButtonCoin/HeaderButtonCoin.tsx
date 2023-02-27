import { useState } from 'react';
import { ICONS } from 'theme/icons.const';
import { HeaderPopupCoin } from './HeaderPopupCoin';
import { HeaderButton } from 'ui-kit/index';

export const HeaderButtonCoin = () => {
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const mouseEnterHandler = () => {
    setPopup(<HeaderPopupCoin />);
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={<ICONS.COIN fill='#F8F8F8' stroke='#F8F8F8' />}
      IndicatorNumber={45}
      IndicatorColor='green'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
