import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Breadcrumbs.module.scss';
import TestsPage from '../../pages/TestsPage/TestsPage';

// Маршрути не дійсні, це заглушка для відображення
const routes = [
  { path: '/tests', element: <TestsPage /> },
  { path: '/allTests', element: <TestsPage /> },
];

interface routes {
  path: string;
  element: React.FC;
}

interface BreadcrumbsProps {
  breadcrumbs?: routes[];
}

function convertTitle(title: string) {
  return title?.split('/')[1]?.charAt(0)?.toUpperCase() + title?.slice(2);
}

export const Breadcrumbs: React.FC = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <ul className={s.breadcrumbs}>
      {routes?.map(({ path }) => (
        <li key={path} className={s.crumbs}>
          <NavLink
            to={path}
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            {convertTitle(path)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
