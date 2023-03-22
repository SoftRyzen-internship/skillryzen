import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import { MainButton, Modal } from 'ui-kit';
import { IThemeContext } from 'constans/types';

import { ICONS } from 'ui-kit/icons';
import { useThemeContext } from 'context/themeContext';

import s from './UnderDevelopment.module.scss';
import { FeedbackModalPageComponent } from 'modules/FeedbackModalPageComponent/FeedbackModalPageComponent';

const objectTheme = {
  dark: {
    title: s.titleDark,
    icons: {
      UNDER_DEVELOPMENT_MAIN: ICONS.UNDER_DEVELOPMENT_MAIN,
      GEAR_BLUE: ICONS.GEAR_BLUE,
      GEAR_GRAY: ICONS.GEAR_GRAY,
      CIRCLE_BLUE: ICONS.CIRCLE_BLUE,
      CIRCLE_GRAY: ICONS.CIRCLE_GRAY,
    },
  },
  light: {
    title: s.titleLight,
    icons: {
      UNDER_DEVELOPMENT_MAIN: ICONS.UNDER_DEVELOPMENT_MAIN_LIGHT,
      GEAR_BLUE: ICONS.GEAR_BLUE_LIGHT,
      GEAR_GRAY: ICONS.GEAR_GRAY_LIGHT,
      CIRCLE_BLUE: ICONS.CIRCLE_BLUE_LIGHT,
      CIRCLE_GRAY: ICONS.CIRCLE_GRAY_LIGHT,
    },
  },
};

export const UnderDevelopment = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  return (
    <section className={s.section}>
      <div>
        <h2 className={objectTheme[theme].title}>
          {t('underDevelopment.title')}
        </h2>
        <div className={s.imageWrapper}>
          {objectTheme[theme].icons.UNDER_DEVELOPMENT_MAIN({
            className: s.main,
          })}
          {objectTheme[theme].icons.GEAR_BLUE({ className: s.gearBlue })}
          {objectTheme[theme].icons.GEAR_GRAY({ className: s.gearGray })}
          {objectTheme[theme].icons.CIRCLE_BLUE({ className: s.circleBlue })}
          {objectTheme[theme].icons.CIRCLE_GRAY({ className: s.circleGray })}
        </div>
        <MainButton
          type='submit'
          text={t('underDevelopment.button')}
          size='large'
          className={s.button}
          onClick={handleClickModal}
        />
      </div>
      {isShowModal && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          <FeedbackModalPageComponent handleClickModal={handleClickModal} />
        </Modal>
      )}
    </section>
  );
};
