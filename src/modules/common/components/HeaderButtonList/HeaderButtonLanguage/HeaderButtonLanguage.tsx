import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICONS } from 'theme/icons.const';
import { HeaderButton } from 'ui-kit/index';
import { Popup } from 'ui-kit/index';

export const HeaderButtonLanguage = () => {
  const { t, i18n } = useTranslation();

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
          { icon: <ICONS.UK />, text: t('header.language.eng') },
          { icon: <ICONS.UKRAINE />, text: t('header.language.ukr') },
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
    />
  );
};
