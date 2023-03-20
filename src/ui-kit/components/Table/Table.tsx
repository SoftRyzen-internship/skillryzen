import { useState, useMemo } from 'react';

import { ICONS } from 'ui-kit/icons';

import s from './Table.module.scss';

export type Column<T> = {
  name: string;
  property: keyof T;
  sortable?: boolean;
};

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export const Table = <T extends { id: number }>({
  columns,
  data,
}: TableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<Column<T> | null>(columns[0]);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  function handleSort(column: Column<T>) {
    if (!column.sortable || column === columns[0]) return;
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  }

  const sortedData = useMemo(() => {
    if (!sortColumn) return data;
    return [...data].sort((a, b) => {
      const direction = sortDirection === 'asc' ? 1 : -1;
      if (a[sortColumn.property] < b[sortColumn.property])
        return -1 * direction;
      if (a[sortColumn.property] > b[sortColumn.property]) return 1 * direction;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.headrow}>
          {columns.map(column => (
            <th
              className={s.data}
              key={column.property as string}
              onClick={() => handleSort(column)}
              style={{ cursor: column.sortable ? 'pointer' : undefined }}
            >
              {column.name}
              {sortColumn === column &&
                column.property !== columns[0].property &&
                (sortDirection === 'asc' ? (
                  <ICONS.SORT_TOP className={s.icon} />
                ) : (
                  <ICONS.SORT_DOWN className={s.icon} />
                ))}
              {sortColumn !== column && column.sortable && (
                // Показуємо обидві стрілки при початковому стані
                <ICONS.SORT className={s.icon} />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(item => (
          <tr key={String(item.id)} className={s.item}>
            {columns.map(column => (
              <td key={column.property as string} className={s.data}>
                {item[column.property]?.toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
