import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from 'routes/routes.const';
import s from './Breadcrumbs.module.scss';

interface Breadcrumb {
  label: string;
  path: string;
}

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const paths = pathname.split('/').filter(Boolean);
    const newBreadcrumbs = paths.map((path, i) => {
      const routePath = `/${paths.slice(0, i + 1).join('/')}`;
      const label = ROUTES[routePath] ?? path;
      return { label, path: routePath };
    });
    setBreadcrumbs(newBreadcrumbs);
  }, [pathname]);

  return (
    <nav>
      <ul className={s.breadcrumbs}>
        {breadcrumbs.map(({ path, label }, i) => (
          <li key={path} className={s.crumbs}>
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
