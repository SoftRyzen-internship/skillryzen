import { Breadcrumbs, Table } from 'ui-kit';

import s from './LeaderboardComponent.module.scss';
import { Column } from 'ui-kit/components/Table/Table';

interface TestData {
  id: number;
  name: string;
  test: string;
  score: string;
}

const columns: Column<TestData>[] = [
  { name: 'Номер', property: 'id', sortable: false },
  { name: 'Ім`я', property: 'name', sortable: true },
  { name: 'Назва Тесту', property: 'test', sortable: true },
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
  return (
    <div className={s.wrapper}>
      <Breadcrumbs />
      <Table columns={columns} data={data} className={s.gridColumns} />
    </div>
  );
};
