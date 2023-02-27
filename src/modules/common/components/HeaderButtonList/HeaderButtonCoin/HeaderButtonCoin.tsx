import { useState } from 'react';
// import { Coin } from '../../../../../theme/icons.const';
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
      // icon={<Coin color='#F8F8F8' size='24px' />}
      IndicatorNumber={45}
      IndicatorColor='green'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
