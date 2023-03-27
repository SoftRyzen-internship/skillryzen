import { lazy } from 'react';

const LazyCompanySettingsPage = lazy(() => import('./CompanySettingsPage'));

const CompanySettingsLazyPage = () => <LazyCompanySettingsPage />;

export default CompanySettingsLazyPage;
