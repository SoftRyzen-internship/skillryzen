import { Outlet } from 'react-router';

import { HeaderTest } from 'modules/dashboard';

const TestingPage = () => {
  return (
    <>
      <HeaderTest />
      <Outlet />
    </>
  );
};

export default TestingPage;
