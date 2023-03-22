import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton, Popup } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';

export const HeaderButtonLanguage = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t, i18n } = useTranslation();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const [lang, setLang] = useState<string>(() =>
    localStorage.getItem('i18nextLng')
  );

  const handleClickLanguage = (language: string) => {
    if (language === 'Ukrainian' || language === 'Українська') {
      i18n.changeLanguage('uk');
    }
    if (language === 'English' || language === 'Англійська') {
      i18n.changeLanguage('en');
    }
    const shortLangName = language.toLowerCase().slice(0, 2);
    setLang(shortLangName);
    setPopup(null);
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        list={[
          { icon: <ICONS.UK />, text: t('header.language.eng') },
          { icon: <ICONS.UKRAINE />, text: t('header.language.ukr') },
        ]}
        handleClickItem={handleClickLanguage}
        theme={theme}
        adaptive={true}
      />
    );
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={lang === 'uk' ? <ICONS.UKRAINE /> : <ICONS.UK />}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
      theme={theme}
    />
  );
};
