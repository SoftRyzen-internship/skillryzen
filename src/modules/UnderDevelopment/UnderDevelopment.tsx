import { useTranslation } from 'react-i18next';

import { MainButton } from 'ui-kit';
import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';

import s from './UnderDevelopment.module.scss';

const objectTheme = {
  dark: {
    wrapper: s.wrapperDark,
    title: s.titleDark,
  },
  light: {
    wrapper: s.wrapperLight,
    title: s.titleLight,
  },
};

export const UnderDevelopment = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <div className={objectTheme[theme].wrapper}>
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
