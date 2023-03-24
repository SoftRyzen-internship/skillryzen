import { useState, useMemo } from 'react';

import { ICONS } from 'ui-kit/icons';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import s from './Table.module.scss';

export type Column<T> = {
  name: string;
  property: keyof T;
  sortable?: boolean;
};

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className: string;
}

export const Table = <T extends { id: number }>({
  columns,
  data,
  className,
}: TableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<Column<T> | null>(columns[0]);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const { theme }: IThemeContext = useThemeContext();

  // сортування даних за вибраним стовпчиком, якщо він є сортованим
  const handleSort = (column: Column<T>): void => {
    if (!column.sortable || column === columns[0]) return;
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // за замовчуванням сортування відбувається за зростанням
  const sortedData = useMemo<T[]>(() => {
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
    <table className={`${s.table} ${s[`table--${theme}`]}`}>
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
                // Показуємо обидві стрілки при початковому стані
                <ICONS.SORT className={`${s.icon} ${s[`icon--${theme}`]}`} />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(item => (
          <tr
            key={String(item.id)}
            className={`${s.tablerow} ${s[`tablerow--${theme}`]} ${className}`}
          >
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
