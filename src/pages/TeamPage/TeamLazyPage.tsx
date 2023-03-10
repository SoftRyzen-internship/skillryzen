import { lazy } from 'react';

const LazyTeamPage = lazy(() => import('./TeamPage'));

const TeamLazyPage = () => <LazyTeamPage />;

export default TeamLazyPage;