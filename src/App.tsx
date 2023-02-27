import { Suspense } from 'react';

import { AppRoutes } from './routes';
import { Layout } from "./modules/dashboard";

import './theme/styles/global.scss';
import './theme/styles/variables.scss';

export const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<p>Loading..</p>}>
          <AppRoutes />
        </Suspense>
      </Layout>
    </>
  );
};
