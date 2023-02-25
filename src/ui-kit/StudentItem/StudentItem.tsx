import s from './Student.module.scss';
import { TestStatus, Checkbox } from '@ui-kit/index';
import { Edit, Filters } from '@theme/icons.const';
import { useState } from 'react';

// interface IStudentItem {
//   id: string,
//   fullName: string;
//   email: string;
//   group: string;
//   phoneNumber?: string;
//   testTitle?: string;
//   testStatus?: string;
//   testScore?: string;
// }

export const StudentItem = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <tr className={s.studentItem}>
      <td>
        <Checkbox
          type='filter'
          labelClassName={s.checkbox}
          checked={checked}
          onChange={handleChange}
        />
      </td>
      <td>150</td>
      <td>Aнастасія Скоробагатько</td>
      <td>daria.serhiienko@gmail.com</td>
      <td>FS25</td>
      {/* <td>+38 050 123 45 67</td> */}
      <td className={s.testTitle}>JavaScript</td>
      <td>
        <TestStatus status='success' />
      </td>
      <td>48/50</td>
      <td>
        <button type='button'>
          <Edit color='#9D9FB5' />
        </button>
      </td>
      <td>
        <button type='button'>
          <Filters color='#9D9FB5' />
        </button>
      </td>
    </tr>
  );
};
