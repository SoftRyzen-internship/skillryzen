import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';

import s from './NotFoundPageComponent.module.scss';

const objectTheme = {
  dark: {
    title: s.titleDark,
  },
  light: {
    title: s.titleLight,
  },
};

export const NotFoundPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <h2 className={objectTheme[theme].title}>{t('notFound.title')}</h2>
      <ICONS.PAGE_404 className={s.image} />
      <NavLink to='/' className={s.button}>
        {t('notFound.button')}
      </NavLink>
    </section>
  );
};
