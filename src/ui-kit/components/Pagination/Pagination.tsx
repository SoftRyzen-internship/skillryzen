import { useState, useEffect } from 'react';

import { ICONS } from 'ui-kit/icons';
import { createArray } from 'utils/createArray';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import s from './Pagination.module.scss';

interface Props {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({ totalPages, onPageChange }: Props) => {
  const { theme }: IThemeContext = useThemeContext();

  const [currentPage, setCurrentPage] = useState<number>(1); // Current active page number
  const [arrayOfVisiblePages, setArrayOfVisiblePages] = useState<
    Array<number | string>
  >([]); // Array of buttons what we see on the page

  // Set number of pages
  const pageNumbers = createArray(totalPages);

  useEffect(() => {
    let tempNumberOfPages: Array<number | string> = [...arrayOfVisiblePages];

    const dotsInitial = '...';
    const dotsLeft = '... ';
    const dotsRight = ' ...';

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
      const sliced = pageNumbers.slice(pageNumbers.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    }

    setArrayOfVisiblePages(tempNumberOfPages);
    onPageChange(currentPage);
    // eslint-disable-next-line
  }, [currentPage]);

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
        className={currentPage <= 1 ? s.arrowBtnDisabled : s.arrowBtn}
        disabled={currentPage <= 1}
      >
        <ICONS.CHEVRON_LEFT />
      </button>

      {arrayOfVisiblePages.map((page, index) => (
        <button
          key={index}
          onClick={() => handleClickPage(page)}
          disabled={page === '...'}
          className={
            page === currentPage
              ? s.activePageBtn
              : `${s.pageBtn} ${s[`pageBtn--${theme}`]}`
          }
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className={currentPage === totalPages ? s.arrowBtnDisabled : s.arrowBtn}
        disabled={currentPage === totalPages}
      >
        <ICONS.CHEVRON_RIGHT />
      </button>
    </div>
  );
};
