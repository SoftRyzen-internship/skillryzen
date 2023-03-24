import { useCallback, useEffect, useState } from 'react';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { Column } from 'ui-kit/components/Table/Table';
import { Breadcrumbs, Pagination, ScrollContainer, Table } from 'ui-kit';

import s from './LeaderboardComponent.module.scss';

interface TestData {
  id: number;
  name: string;
  test: string;
  score: string;
}

const columns: Column<TestData>[] = [
  { name: '№', property: 'id', sortable: false },
  { name: 'Ім`я', property: 'name', sortable: true },
  { name: 'Тест', property: 'test', sortable: true },
  { name: 'Результат', property: 'score', sortable: true },
];

const data: TestData[] = [
  {
    id: 1,
    name: 'Aнастасія Скоробагатько',
    test: 'JavaScript',
    score: '48/50',
  },
  {
    id: 2,
    name: 'Олексій Скоробагатько',
    test: 'JavaScript',
    score: '42/50',
  },
  {
    id: 3,
    name: 'Іван Скоробагатько',
    test: 'JavaScript',
    score: '45/50',
  },
  {
    id: 4,
    name: 'Марія Скоробагатько',
    test: 'JavaScript',
    score: '50/50',
  },
  {
    id: 5,
    name: 'Aнастасія Скоробагатько',
    test: 'JavaScript',
    score: '48/50',
  },
  {
    id: 6,
    name: 'Олексій Скоробагатько',
    test: 'JavaScript',
    score: '42/50',
  },
  {
    id: 7,
    name: 'Іван Скоробагатько',
    test: 'JavaScript',
    score: '45/50',
  },
  {
    id: 8,
    name: 'Марія Скоробагатько',
    test: 'JavaScript',
    score: '50/50',
  },
];

export const LeaderboardComponent = () => {
  const [totalPages, setTotalPages] = useState<number>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [array, setArray] = useState<TestData[]>([]);
  const { theme }: IThemeContext = useThemeContext();
  const itemsForPage = 10;

  useEffect(() => {
    handlePageChange(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (currentPage: number) => {
      const start = itemsForPage * (currentPage - 1);
      const end = start + itemsForPage;
      setArray(data.slice(start, end));
      setTotalPages(Math.ceil(data.length / itemsForPage));
      setCurrentPage(currentPage);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, itemsForPage]
  );

  return (
    <ScrollContainer>
      <Breadcrumbs />
      <div className={s.wrapper}>
        <h2 className={`${s.title} ${s[`title--${theme}`]}`}>Leaderboard</h2>
      </div>
      <Table columns={columns} data={array} className={s.gridColumns} />
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className={s.pagination}
      />
    </ScrollContainer>
  );
};
