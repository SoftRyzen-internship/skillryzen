import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCurrentWidth, useOutsideClick } from 'hooks';

import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';

import { IThemeContext } from 'constans/types';
import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';

export const HeaderButtonCoin = () => {
  const ref = useRef<HTMLDivElement>();
  const { theme }: IThemeContext = useThemeContext();
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentWidth = useCurrentWidth();

  useOutsideClick(ref, setPopup);
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
        viewAll={t('header.viewAll')}
        theme={theme}
      />
    );
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };

  const handleClick = () => {
    if (popup) return setPopup(null);
    setPopup(
      <Popup
        handleClickLink={() => navigate(ROUTES.COINS)}
        list={tempList}
        viewAll={t('header.viewAll')}
        theme={theme}
      />
    );
  };

  return (
    <HeaderButton
      icon={
        <ICONS.COIN
          fill={theme === 'dark' ? 'var(--primary-txt-cl)' : 'var(--accent-cl)'}
        />
      }
      indicatorNumber={tempList.length}
      indicatorColor='green'
      onMouseEnter={currentWidth > 1279 ? mouseEnterHandler : null}
      onMouseLeave={currentWidth > 1279 ? mouseLeaveHandler : null}
      onClick={currentWidth < 1279 ? handleClick : null}
      popupContent={popup}
      theme={theme}
      ref={ref}
    />
  );
};
