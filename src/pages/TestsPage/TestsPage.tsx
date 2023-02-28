import { Header, MainLayout, Sidebar } from 'modules/dashboard';
import { TestsContainer } from 'modules/dashboard/components/TestsContainer';

const TestsPage = () => {
  return (
    <>
      <Header />
      <TestsContainer>
        <Sidebar />
        <MainLayout />
      </TestsContainer>
    </>
  );
};

export default TestsPage;
