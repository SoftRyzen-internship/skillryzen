import { useState } from 'react';
import { Pagination } from '@ui-kit/Pagination/Pagination';

const LoginPage = () => {
  // return <div>Login</div>;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Pagination
      // currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};

export default LoginPage;
