import { Navigate } from 'react-router';

import { ROUTES } from 'routes/routes.const';

interface Props {
  isAuth: boolean;
  children: JSX.Element;
}

export const PublickRoute = ({ isAuth, children }: Props) => {
  if (isAuth) {
    return <Navigate to={ROUTES.CERTIFICATION} replace />;
  }

  return children;
};
