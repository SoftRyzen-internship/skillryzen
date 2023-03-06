import { lazy } from 'react';

const LazyCompanyPage = lazy(() => import('./CompanyPage'));

const CompanyLazyPage = () => <LazyCompanyPage/>;

export default CompanyLazyPage;