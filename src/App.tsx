import { Suspense } from 'react';

import { AppRoutes } from 'routes';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </>
  );
};
