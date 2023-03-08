import { useTranslation } from 'react-i18next';

import { MainButton } from 'ui-kit';
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
        <MainButton
          type='submit'
          text={t('underDevelopment.button')}
          size='large'
          className={s.button}
        />
      </div>
    </section>
  );
};
