import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './NotFoundPageComponent.module.scss';

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

export const NotFoundPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <div className={objectTheme[theme].wrapper}>
        <h2 className={objectTheme[theme].title}>{t('notFound.title')}</h2>
        <NavLink to='/' className={s.link}>
          {t('notFound.button')}
        </NavLink>
      </div>
    </section>
  );
};
