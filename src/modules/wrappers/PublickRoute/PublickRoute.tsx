import { Navigate } from 'react-router';

import { ROUTES } from 'routes/routes.const';

interface Props {
  isLoggedIn: boolean;
  children: JSX.Element;
}

export const PublickRoute = ({ isLoggedIn, children }: Props) => {
  // if (isLoggedIn) {
  //   return <Navigate to={ROUTES.CERTIFICATION} replace />;
  // }

  return children;
};
