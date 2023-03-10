import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import s from './Breadcrumbs.module.scss';

interface Routes {
  name: string;
  path: string;
}

export const Breadcrumbs = () => {
  const location = useLocation();
  const routes: Routes[] = [];
  const pathArr = location.pathname.split('/');

  for (let i = 1; i < pathArr.length; i += 1) {
    let path;
    if (i === 1) {
      path = '/' + pathArr[i];
    } else {
      path = routes[i - 2].path + '/' + pathArr[i];
    }
    routes.push({
      name:
        pathArr[i].charAt(0).toUpperCase() +
        pathArr[i].slice(1).replace('-', ' '),
      path,
    });
  }

  return (
    <ul className={s.breadcrumbs}>
      {routes?.map(({ path, name }) => (
        <li key={path} className={s.crumbs}>
          <NavLink to={path} className={s.link}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
