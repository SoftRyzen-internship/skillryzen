import { Suspense, lazy } from 'react';

import { Header } from 'modules/Header';
import { Sidebar, MainContainer } from 'modules/dashboard';

const LazyUnderDevelopment = lazy(async () => ({
  default: (await import('modules/dashboard/components/UnderDevelopment'))
    .UnderDevelopment,
}));

const UnderDevelopmentPage = () => {
  return (
    <>
      <Header isTestingPage={false} />
      <MainContainer>
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyUnderDevelopment title='Ця сторінка в розробці' />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default UnderDevelopmentPage;
