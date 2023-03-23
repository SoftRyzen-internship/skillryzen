import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrentWidth, useOutsideClick } from 'hooks';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';

export const HeaderButtonLanguage = () => {
  const ref = useRef<HTMLDivElement>();
  const { theme }: IThemeContext = useThemeContext();
  const { t, i18n } = useTranslation();
  const currentWidth = useCurrentWidth();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
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
    setPopup(
      <Popup
        list={[
          { id: 'en', icon: <ICONS.UK />, text: t('header.language.eng') },
          { id: 'uk', icon: <ICONS.UKRAINE />, text: t('header.language.ukr') },
        ]}
        handleClickItem={handleClickLanguage}
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
          { id: 'en', icon: <ICONS.UK />, text: t('header.language.eng') },
          { id: 'uk', icon: <ICONS.UKRAINE />, text: t('header.language.ukr') },
        ]}
        handleClickItem={handleClickLanguage}
        theme={theme}
        adaptive={true}
      />
    );
  };

  return (
    <HeaderButton
      icon={lang === 'uk' ? <ICONS.UKRAINE /> : <ICONS.UK />}
      onMouseEnter={currentWidth > 1279 ? mouseEnterHandler : null}
      onMouseLeave={currentWidth > 1279 ? mouseLeaveHandler : null}
      onClick={currentWidth < 1279 ? handleClick : null}
      popupContent={popup}
      theme={theme}
      ref={ref}
    />
  );
};
