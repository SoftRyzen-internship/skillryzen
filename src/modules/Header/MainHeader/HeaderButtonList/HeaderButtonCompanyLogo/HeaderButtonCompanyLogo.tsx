import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useCurrentWidth, useOutsideClick } from 'hooks';

import { ROUTES } from 'routes/routes.const';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';

export const HeaderButtonCompanyLogo = () => {
  const ref = useRef<HTMLDivElement>();
  const { theme }: IThemeContext = useThemeContext();
  const currentWidth = useCurrentWidth();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const { t } = useTranslation();

  useOutsideClick(ref, setPopup);

  const iconColor = {
    dark: 'var(--primary-txt-cl)',
    light: 'var(--accent-cl)',
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        list={[
          {
            id: 'companyProfile',
            icon: <ICONS.USER stroke={iconColor[theme]} />,
            text: t('header.company.profile'),
            path: ROUTES.COMPANY_PROFILE,
          },
          {
            id: 'companySettings',
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

  const handleClick = () => {
    if (popup) return setPopup(null);
    setPopup(
      <Popup
        list={[
          {
            id: 'companyProfile',
            icon: <ICONS.USER stroke={iconColor[theme]} />,
            text: t('header.company.profile'),
            path: ROUTES.COMPANY_PROFILE,
          },
          {
            id: 'companySettings',
            icon: <ICONS.SETTINGS stroke={iconColor[theme]} />,
            text: t('header.company.settings'),
            path: ROUTES.COMPANY_SETTINGS,
          },
        ]}
        theme={theme}
      />
    );
  };
  return (
    <HeaderButton
      // imgUrl={IMAGES.GOIT_AVATAR}
      onMouseEnter={currentWidth > 1279 ? mouseEnterHandler : null}
      onMouseLeave={currentWidth > 1279 ? mouseLeaveHandler : null}
      onClick={currentWidth < 1279 ? handleClick : null}
      popupContent={popup}
      theme={theme}
      ref={ref}
    />
  );
};
