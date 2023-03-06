import { Suspense, lazy } from 'react';

const LazyUnderDevelopment = lazy(async () => ({
  default: (await import('modules/UnderDevelopment')).UnderDevelopment,
}));

const UnderDevelopmentPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyUnderDevelopment />
      </Suspense>
    </>
  );
};

export default UnderDevelopmentPage;
