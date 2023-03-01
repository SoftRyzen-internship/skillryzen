import { useState } from 'react';

import { COLORS } from 'theme/colors.const';
import { ICONS } from 'theme/icons.const';

import { useThemeContext } from 'context/themeContext';

import { HeaderButton } from 'ui-kit/index';

import { HeaderPopupCoin } from './HeaderPopupCoin';
import { IThemeContext } from 'modules/common/types';

export const HeaderButtonCoin = () => {
  const { theme }: IThemeContext = useThemeContext();
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const mouseEnterHandler = () => {
    setPopup(<HeaderPopupCoin />);
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={<ICONS.COIN fill={COLORS.coinIcon} stroke={COLORS.coinIcon} />}
      IndicatorNumber={45}
      IndicatorColor='green'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
      theme={theme}
    />
  );
};
