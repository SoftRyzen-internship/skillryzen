import { useState, useMemo } from 'react';

export type Column<T> = {
  name: string;
  property: keyof T;
  sortable?: boolean;
};

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export function Table<T extends { id: number }>({
  columns,
  data,
}: TableProps<T>) {
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
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={column.property as string}
              onClick={() => handleSort(column)}
              style={{ cursor: column.sortable ? 'pointer' : undefined }}
            >
              {column.name}
              {sortColumn === column &&
                column.property !== columns[0].property &&
                (sortDirection === 'asc' ? ' ▲' : ' ▼')}
              {sortColumn !== column &&
                column.sortable &&
                // Показуємо обидві стрілки при початковому стані
                '▲▼'}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(item => (
          <tr key={String(item.id)}>
            {columns.map(column => (
              <td key={column.property as string}>
                {item[column.property]?.toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
