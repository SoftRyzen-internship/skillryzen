import { useState } from 'react';
// import { Ukraine } from '../../../../../theme/icons.const';
import { HeaderPopupLanguage } from './HeaderPopupLanguage';
import { HeaderButton } from '../../../../../ui-kit/index';

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
      // icon={<Ukraine size='24px' />}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
