import { Suspense } from 'react';

import { AppRoutes } from './routes';
import { Layout } from "./modules/dashboard";

import './theme/styles/global.scss';
import './theme/styles/variables.scss';
import { SideBar } from 'ui-kit/SideBar/SideBar';



export const App = () => {
  return (
    <>
      <Layout>
        <SideBar/>
        <Suspense fallback={<p>Loading..</p>}>
          <AppRoutes />
        </Suspense>
      </Layout>
    </>
  );
};
