import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrentWidth, useOutsideClick } from 'hooks';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';

import { IThemeContext } from 'constants/types';

export const HeaderButtonLanguage = () => {
  const ref = useRef<HTMLDivElement>();
  const { theme }: IThemeContext = useThemeContext();
  const { t, i18n } = useTranslation();
  const currentWidth = useCurrentWidth();

  const [popup, setPopup] = useState(false);
  const [lang, setLang] = useState<string>(() =>
    localStorage.getItem('i18nextLng')
  );
  useOutsideClick(ref, setPopup);

  const handleClickLanguage = (language: string) => {
    if (language === lang) {
      setPopup(null);
      return;
    }
    i18n.changeLanguage(language);
    setLang(language);
    setPopup(null);
  };

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
      icon={lang === 'uk' ? <ICONS.UKRAINE /> : <ICONS.UK />}
      onMouseEnter={currentWidth > 1279 ? mouseEnterHandler : null}
      onMouseLeave={currentWidth > 1279 ? mouseLeaveHandler : null}
      onClick={currentWidth < 1279 ? handleClick : null}
      popupContent={
        popup && (
          <Popup
            list={[
              { id: 'en', icon: <ICONS.UK />, text: t('header.language.eng') },
              {
                id: 'uk',
                icon: <ICONS.UKRAINE />,
                text: t('header.language.ukr'),
              },
            ]}
            handleClickItem={handleClickLanguage}
            theme={theme}
            adaptive={true}
          />
        )
      }
      theme={theme}
      ref={ref}
    />
  );
};
