import { lazy } from 'react';

const LazyProfileSettingsPage = lazy(() => import('./ProfileSettingsPage'));

const ProfileSettingsLazyPage = () => <LazyProfileSettingsPage />;

export default ProfileSettingsLazyPage;
