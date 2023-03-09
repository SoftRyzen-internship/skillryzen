import { lazy } from 'react';

const LazyInviteModulePage = lazy(() => import('./InviteModulePage'));

const InviteModuleLazyPage = () => <LazyInviteModulePage />;

export default InviteModuleLazyPage;
