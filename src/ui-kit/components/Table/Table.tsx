import { useState, useMemo } from 'react';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

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

export const Table = <T extends { id: string }>({
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
      <TableHead
        columns={columns}
        className={className}
        handleSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
      <TableBody
        columns={columns}
        className={className}
        sortedData={sortedData}
      />
    </table>
  );
};

/* Поки не видаляти, треба подумати як відображати іконки */
/* {[...sortedData.slice(0, 3)].map((item, index) => (
          <tr
            key={String(item.id)}
            className={`${s.tablerow} ${s[`tablerow--${theme}`]} ${className}`}
          >
            {columns.map((column, columnIndex) => (
              <td
                key={column.property as string}
                className={`${s.data} ${
                  index < 3 && columnIndex === 0 ? s['icons'] : ''
                }`}
              >
                {item[column.property]?.toString()}
              </td>
            ))}
          </tr>
        ))}
        {sortedData.slice(3).map(item => (
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
))} */
