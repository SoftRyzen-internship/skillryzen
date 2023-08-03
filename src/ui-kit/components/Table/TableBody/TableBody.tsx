import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';

import { Column } from '../Table';

import s from './TableBody.module.scss';

interface TableBodyProps<T> {
  columns: Column<T>[];
  className: string;
  sortedData: T[];
}

export const TableBody = <T extends { id: string }>({
  columns,
  className,
  sortedData,
}: TableBodyProps<T>) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
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
  );
};
