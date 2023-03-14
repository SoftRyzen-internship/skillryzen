import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';
import { IThemeContext } from 'constans/types';

export const HeaderButtonNotification = () => {
  const { theme }: IThemeContext = useThemeContext();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const iconColor = {
    dark: 'var(--primary-txt-cl)',
    light: 'var(--accent-cl)',
  };

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
      icon={<ICONS.BELL fill={iconColor[theme]} />}
      indicatorNumber={tempList.length}
      indicatorColor='yellow'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
      theme={theme}
    />
  );
};
