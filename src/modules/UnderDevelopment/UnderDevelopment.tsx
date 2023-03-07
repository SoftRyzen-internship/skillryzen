import { useTranslation } from 'react-i18next';

import { AuthButton } from 'ui-kit';
import { IThemeContext } from 'constans/types';

import { ICONS } from 'ui-kit/icons';
import { useThemeContext } from 'context/themeContext';

import s from './UnderDevelopment.module.scss';

const objectTheme = {
  dark: {
    title: s.titleDark,
  },
  light: {
    title: s.titleLight,
  },
};

export const UnderDevelopment = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <div>
        <h2 className={objectTheme[theme].title}>
          {t('underDevelopment.title')}
        </h2>
        <div className={s.imageWrapper}>
          <ICONS.UNDER_DEVELOPMENT_MAIN width='388' height='208' />
          <ICONS.GEAR_BLUE className={s.gearBlue} />
          <ICONS.GEAR_GRAY className={s.gearGray} />
          <ICONS.CIRCLE_BLUE className={s.circleBlue} />
          <ICONS.CIRCLE_GRAY className={s.circleGray} />
        </div>
        <AuthButton
          type='submit'
          text={t('underDevelopment.button')}
          size='large'
          className={s.button}
        />
      </div>
    </section>
  );
};
