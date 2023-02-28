import { Suspense } from 'react';

import { AppRoutes } from './routes';

import './theme/styles/global.scss';
import './theme/styles/variables.scss';
import { UnderDevelopment } from 'modules/dashboard/components/UnderDevelopment/UnderDevelopment';

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
        <UnderDevelopment title='he' />
      </Suspense>
    </>
  );
};
