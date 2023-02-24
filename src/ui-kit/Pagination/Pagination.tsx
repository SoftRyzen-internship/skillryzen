import { useState, useEffect } from 'react';
import s from './Pagination.module.scss';

interface IProps {
  // currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  // currentPage,
  totalPages,
  onPageChange,
}: IProps) => {
  //Set number of pages
  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }
  console.log('pageNumbers', pageNumbers);

  // Current active page number
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Array of buttons what we see on the page
  const [arrayOfVisiblePages, setArrayOfVisiblePages] = useState<
    Array<number | string>
  >([]);

  useEffect(() => {
    let tempNumberOfPages: Array<number | string> = [...arrayOfVisiblePages];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    // 1, 2, 3, 4, 5
    if (pageNumbers.length < 6) {
      tempNumberOfPages = pageNumbers;

      // 1, 2, 3, ..., 10
    } else if (currentPage >= 1 && currentPage <= 2) {
      tempNumberOfPages = [1, 2, 3, dotsInitial, pageNumbers.length];

      // 1, 2, 3, 4, ..., 10
    } else if (currentPage === 3) {
      const sliced = pageNumbers.slice(0, 4);
      tempNumberOfPages = [...sliced, dotsInitial, pageNumbers.length];

      // 1, ..., 3, 4, 5, ..., 10
    } else if (currentPage > 3 && currentPage < pageNumbers.length - 2) {
      const sliced1 = pageNumbers.slice(currentPage - 2, currentPage);
      const sliced2 = pageNumbers.slice(currentPage, currentPage + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pageNumbers.length,
      ];
    } else if (currentPage > pageNumbers.length - 3) {
      // > 7
      const sliced = pageNumbers.slice(pageNumbers.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    }

    setArrayOfVisiblePages(tempNumberOfPages);
    onPageChange(currentPage);
  }, [currentPage]);

  const handleClickNext = (page: number | string) => {
    if (typeof page === 'string') {
      return;
    }
    setCurrentPage(page + 1);
  };

  const handleClickPrev = (page: number | string) => {
    if (typeof page === 'string') {
      return;
    }
    setCurrentPage(page - 1);
  };

  const handleClickPage = (page: number | string) => {
    if (typeof page === 'string') {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <div className={s.paginationContainer}>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className={s.text}
        disabled={currentPage <= 1}
      >
        Previous
      </button>

      {arrayOfVisiblePages.map((page, index) => (
        <button
          key={index}
          onClick={() => handleClickPage(page)}
          disabled={page === '...'}
          className={page === currentPage ? s.activePageBtn : s.pageBtn}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className={s.text}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
