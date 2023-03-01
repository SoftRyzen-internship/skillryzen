import { Suspense, lazy } from 'react';

import { Header, Sidebar, MainContainer } from 'modules/dashboard';

const LazyUnderDevelopment = lazy(async () => ({
  default: (await import('modules/dashboard/components/UnderDevelopment'))
    .UnderDevelopment,
}));

export const UnderDevelopmentPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyUnderDevelopment title='Ця сторінка в розробці' />
        </Suspense>
      </MainContainer>
    </>
  );
};
