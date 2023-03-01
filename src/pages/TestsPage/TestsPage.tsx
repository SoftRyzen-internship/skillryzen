import { Outlet } from 'react-router';

import { Header, Sidebar } from 'modules/dashboard';
import { TestsContainer } from 'modules/dashboard/components/TestsContainer';

const TestsPage = () => {
  return (
    <>
      <Header />
      <TestsContainer>
        <Sidebar />
        <Outlet />
      </TestsContainer>
    </>
  );
};

export default TestsPage;
