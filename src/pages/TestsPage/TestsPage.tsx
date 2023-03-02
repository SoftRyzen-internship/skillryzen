import { Outlet } from 'react-router';

import { Sidebar } from 'modules/dashboard';
import { Header } from 'modules/Header';
import { TestsContainer } from 'modules/dashboard/components/TestsContainer';

const TestsPage = () => {
  return (
    <>
      <Header isTestingPage={false} />
      <TestsContainer>
        <Sidebar />
        <Outlet />
      </TestsContainer>
    </>
  );
};

export default TestsPage;
