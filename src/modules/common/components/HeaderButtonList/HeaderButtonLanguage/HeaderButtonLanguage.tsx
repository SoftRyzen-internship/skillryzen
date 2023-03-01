import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'theme/icons.const';

import { useThemeContext } from 'context/themeContext';

import { HeaderButton, Popup } from 'ui-kit/index';

import { IThemeContext } from 'modules/common/types';

export const HeaderButtonLanguage = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { i18n } = useTranslation();

  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const [lang, setLang] = useState<string>(() =>
    localStorage.getItem('i18nextLng').slice(0, 2)
  );

  const handleClickLanguage = (language: string) => {
    const shortLangName = language.toLowerCase().slice(0, 2);
    setLang(shortLangName);

    i18n.changeLanguage(shortLangName);
    setPopup(null);
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        list={[
          { icon: <ICONS.UK />, text: 'English' },
          { icon: <ICONS.UKRAINE />, text: 'Ukrainian' },
        ]}
        handleClickItem={handleClickLanguage}
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
