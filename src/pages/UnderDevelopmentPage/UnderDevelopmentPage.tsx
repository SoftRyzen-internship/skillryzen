import { Suspense, lazy } from 'react';

const LazyUnderDevelopment = lazy(async () => ({
  default: (await import('modules/UnderDevelopment')).UnderDevelopment,
}));

const UnderDevelopmentPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyUnderDevelopment title='Ця сторінка в розробці' />
      </Suspense>
    </>
  );
};

export default UnderDevelopmentPage;
