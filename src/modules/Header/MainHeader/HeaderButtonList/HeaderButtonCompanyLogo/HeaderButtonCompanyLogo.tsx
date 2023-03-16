import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';

export const HeaderButtonCompanyLogo = () => {
  const { theme }: IThemeContext = useThemeContext();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();

  const iconColor = {
    dark: 'var(--primary-txt-cl)',
    light: 'var(--accent-cl)',
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        list={[
          {
            icon: <ICONS.USER stroke={iconColor[theme]} />,
            text: t('header.company.profile'),
            path: ROUTES.COMPANY_PROFILE,
          },
          {
            icon: <ICONS.SETTINGS stroke={iconColor[theme]} />,
            text: t('header.company.settings'),
            path: ROUTES.COMPANY_SETTINGS,
          },
        ]}
        theme={theme}
      />
    );
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      // imgUrl={IMAGES.GOIT_AVATAR}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
      theme={theme}
    />
  );
};
