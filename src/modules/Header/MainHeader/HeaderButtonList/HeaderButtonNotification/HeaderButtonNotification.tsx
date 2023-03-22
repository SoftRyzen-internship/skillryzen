import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCurrentWidth,useOutsideClick } from 'hooks';

import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';

export const HeaderButtonNotification = () => {
  const ref = useRef<HTMLDivElement>();
  const { theme }: IThemeContext = useThemeContext();
  const currentWidth = useCurrentWidth();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const iconColor = {
    dark: 'var(--primary-txt-cl)',
    light: 'var(--accent-cl)',
  };

  useOutsideClick(ref, setPopup);

  // тимчасовий масив, далі буде приходити з бекенду
  const tempList = [
    {
      icon: <ICONS.PIN stroke={iconColor[theme]} />,
      text: t('header.notifications.item1'),
    },
    {
      icon: <ICONS.PIN stroke={iconColor[theme]} />,
      text: t('header.notifications.item2'),
    },
    {
      icon: <ICONS.PIN stroke={iconColor[theme]} />,
      text: t('header.notifications.item2'),
    },
  ];
  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        handleClickLink={() => navigate(ROUTES.NOTIFICATIONS)}
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
        handleClickLink={() => navigate(ROUTES.NOTIFICATIONS)}
        list={tempList}
        vievAll={t('header.viewAll')}
        theme={theme}
      />
    );
  };

  return (
    <HeaderButton
      icon={<ICONS.BELL fill={iconColor[theme]} />}
      indicatorNumber={tempList.length}
      indicatorColor='yellow'
      onMouseEnter={currentWidth > 1279 ? mouseEnterHandler : null}
      onMouseLeave={currentWidth > 1279 ? mouseLeaveHandler : null}
      onClick={currentWidth < 1279 ? handleClick : null}
      popupContent={popup}
      theme={theme}
      ref={ref}
    />
  );
};
