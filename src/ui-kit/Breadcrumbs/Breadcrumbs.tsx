import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Breadcrumbs.module.scss';
import TestsPage from '@modules/pages/TestsPage/TestsPage';

// Маршрути не дійсні, це заглушка для відображення
const routes = [
  { path: '/tests', element: <TestsPage /> },
  { path: '/allTests', element: <TestsPage /> },
];

interface routes {
  path: string;
  element: any;
}

interface BreadcrumbsProps {
  breadcrumbs?: routes[];
}

export const Breadcrumbs: React.FC = ({ breadcrumbs }: BreadcrumbsProps) => {
  const location = useLocation();

  return (
    console.log(location.pathname),
    (
      <nav className={s.breadcrumbs}>
        {routes?.map(
          ({ path }, index) => (
            console.log(routes),
            (
              <div className={s.crumbs} key={path}>
                <Link
                  to={path}
                  className={
                    path === location.pathname
                      ? s.crumbActive
                      : s.crumbNotActive
                  }
                >
                  {path?.split('/')[1]?.charAt(0)?.toUpperCase() +
                    path?.slice(2)}
                </Link>
                {index !== routes.length - 1 && ''}
              </div>
            )
          )
        )}
      </nav>
    )
  );
};
