import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ROUTES } from 'routes/routes.const';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './Breadcrumbs.module.scss';

const objectTheme = {
  dark: {
    crumbs: s.crumbsDark,
  },
  light: {
    crumbs: s.crumbsLight,
  },
};

interface Breadcrumb {
  label: string;
  path: string;
}

export const Breadcrumbs = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { pathname } = useLocation();

  const breadcrumbs = useMemo<Breadcrumb[]>(() => {
    const paths = pathname.split('/').filter(Boolean);
    return paths.map((path, i) => {
      const routePath = `/${paths.slice(0, i + 1).join('/')}`;
      const label = ROUTES[routePath] ?? path;
      return { label, path: routePath };
    });
  }, [pathname]);

  return (
    <nav>
      <ul className={s.breadcrumbs}>
        {breadcrumbs.map(({ path, label }, i) => (
          <li key={path} className={objectTheme[theme].crumbs}>
            {i === breadcrumbs.length - 1 ? (
              label
            ) : (
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? s.active : undefined)}
              >
                {label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
