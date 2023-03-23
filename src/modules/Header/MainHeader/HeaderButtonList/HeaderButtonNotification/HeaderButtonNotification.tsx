import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCurrentWidth, useOutsideClick } from 'hooks';

import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';

export const HeaderButtonNotification = () => {
  const ref = useRef<HTMLDivElement>();
  const { theme }: IThemeContext = useThemeContext();
  const currentWidth = useCurrentWidth();

  const [popup, setPopup] = useState(false);
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
      id: 'notification-1',
      icon: <ICONS.PIN stroke={iconColor[theme]} />,
      text: t('header.notifications.item1'),
    },
    {
      id: 'notification-2',
      icon: <ICONS.PIN stroke={iconColor[theme]} />,
      text: t('header.notifications.item2'),
    },
    {
      id: 'notification-3',
      icon: <ICONS.PIN stroke={iconColor[theme]} />,
      text: t('header.notifications.item2'),
    },
  ];
  const mouseEnterHandler = () => {
    setPopup(true);
  };
  const mouseLeaveHandler = () => {
    setPopup(false);
  };

  const handleClick = () => {
    if (popup) return setPopup(false);
    setPopup(true);
  };

  return (
    <HeaderButton
      icon={<ICONS.BELL fill={iconColor[theme]} />}
      indicatorNumber={tempList.length}
      indicatorColor='yellow'
      onMouseEnter={currentWidth > 1279 ? mouseEnterHandler : null}
      onMouseLeave={currentWidth > 1279 ? mouseLeaveHandler : null}
      onClick={currentWidth < 1279 ? handleClick : null}
      popupContent={
        popup && (
          <Popup
            handleClickLink={() => navigate(ROUTES.NOTIFICATIONS)}
            list={tempList}
            viewAll={t('header.viewAll')}
            theme={theme}
          />
        )
      }
      theme={theme}
      ref={ref}
    />
  );
};
