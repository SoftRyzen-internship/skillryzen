import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICONS } from 'theme/icons.const';

import { useThemeContext } from 'context/themeContext';

import { IThemeContext } from 'modules/common/types';
import { HeaderButton, Popup } from 'ui-kit/index';

export const HeaderButtonCoin = () => {
  const { theme }: IThemeContext = useThemeContext();
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();

  // тимчасовий масив, далі буде приходити з бекенду
  const tempList = [
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item1'),
    },
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item2'),
    },
  ];

  const mouseEnterHandler = () => {
    setPopup(<Popup list={tempList} vievAll={t('header.viewAll')} />);
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={<ICONS.COIN fill='var(--primary-txt-cl)' />}
      IndicatorNumber={tempList.length}
      IndicatorColor='green'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
      theme={theme}
    />
  );
};
