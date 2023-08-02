import { ICONS } from 'ui-kit/icons';

import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';

import { Column } from '../Table';

import s from './TableHead.module.scss';

interface TableHeadProps<T> {
  columns: Column<T>[];
  className: string;
  handleSort: (column: Column<T>) => void;
  sortColumn: Column<T>;
  sortDirection: string;
}

export const TableHead = <T extends { id: string }>({
  columns,
  className,
  handleSort,
  sortColumn,
  sortDirection,
}: TableHeadProps<T>) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <thead className={s.head}>
      <tr className={`${s.headrow} ${s[`headrow--${theme}`]} ${className}`}>
        {columns.map(column => (
          <th
            className={`${s.data} ${column.sortable ? s.cursor : ''}`}
            key={column.property as string}
            onClick={() => handleSort(column)}
          >
            {column.name}
            {sortColumn === column &&
              column.property !== columns[0].property &&
              (sortDirection === 'asc' ? (
                <ICONS.SORT_TOP
                  className={`${s.icon} ${s[`icon--${theme}`]}`}
                />
              ) : (
                <ICONS.SORT_DOWN
                  className={`${s.icon} ${s[`icon--${theme}`]}`}
                />
              ))}
            {sortColumn !== column && column.sortable && (
              <ICONS.SORT className={`${s.icon} ${s[`icon--${theme}`]}`} />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
