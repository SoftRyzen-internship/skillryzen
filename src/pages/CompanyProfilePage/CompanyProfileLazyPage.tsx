import { lazy } from 'react';

const LazyCompanyProfilePage = lazy(() => import('./CompanyProfilePage'));

const CompanyProfileLazyPage = () => <LazyCompanyProfilePage />;

export default CompanyProfileLazyPage;
