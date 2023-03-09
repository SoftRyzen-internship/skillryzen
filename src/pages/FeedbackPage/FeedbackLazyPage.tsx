import { lazy } from 'react';

const LazyFeedback = lazy(() => import('./FeedbackPage'));

const StudentSettingsLazyPage = () => <LazyFeedback />;

export default StudentSettingsLazyPage;
