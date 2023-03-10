import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';

import { IThemeContext } from 'constans/types';
import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';

export const HeaderButtonCoin = () => {
  const { theme }: IThemeContext = useThemeContext();
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    setPopup(
      <Popup
        handleClickLink={() => navigate(ROUTES.COINS)}
        list={tempList}
        vievAll={t('header.viewAll')}
        theme={theme}
      />
    );
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={
        <ICONS.COIN
          fill={theme === 'dark' ? 'var(--primary-txt-cl)' : 'var(--accent-cl)'}
        />
      }
      IndicatorNumber={tempList.length}
      IndicatorColor='green'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
      theme={theme}
    />
  );
};
