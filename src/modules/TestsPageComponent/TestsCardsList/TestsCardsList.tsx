import { CardsList } from 'modules/common/CardsList/CardsList';
import { Pagination } from 'ui-kit';
import { useState } from 'react';

interface TestsListProps {
  size?: 'large' | 'small';
}

export const TestsCardsList = ({ size }: TestsListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const testsArray = [
    {
      id: 1,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
    {
      id: 2,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
    {
      id: 3,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
    {
      id: 4,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
  ];

  // return <CardsList type='info' size={size} testsArray={testsArray} />;
  return (
    <>
      <CardsList type='info' size={size} testsArray={testsArray} />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
};
