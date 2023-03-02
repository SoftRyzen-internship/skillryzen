import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICONS } from 'theme/icons.const';

import { useThemeContext } from 'context/themeContext';

import { HeaderButton, Popup } from 'ui-kit/index';
import { IThemeContext } from 'modules/common/types';

export const HeaderButtonNotification = () => {
  const { theme }: IThemeContext = useThemeContext();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();

  // тимчасовий масив, далі буде приходити з бекенду
  const tempList = [
    {
      icon: (
        <ICONS.PIN
          stroke={
            theme === 'dark' ? 'var(--primary-txt-cl)' : 'var(--accent-cl)'
          }
        />
      ),
      text: t('header.notifications.item1'),
    },
    {
      icon: (
        <ICONS.PIN
          stroke={
            theme === 'dark' ? 'var(--primary-txt-cl)' : 'var(--accent-cl)'
          }
        />
      ),
      text: t('header.notifications.item2'),
    },
    {
      icon: (
        <ICONS.PIN
          stroke={
            theme === 'dark' ? 'var(--primary-txt-cl)' : 'var(--accent-cl)'
          }
        />
      ),
      text: t('header.notifications.item2'),
    },
  ];
  const mouseEnterHandler = () => {
    setPopup(
      <Popup list={tempList} vievAll={t('header.viewAll')} theme={theme} />
    );
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={
        <ICONS.BELL
          fill={theme === 'dark' ? 'var(--primary-txt-cl)' : 'var(--accent-cl)'}
        />
      }
      IndicatorNumber={tempList.length}
      IndicatorColor='yellow'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
      theme={theme}
    />
  );
};
