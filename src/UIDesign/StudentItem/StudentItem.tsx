import s from './Student.module.scss'
import { TestStatus } from '../TestStatus/TestStatus'

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
  return (
    <tr className={s.studentItem}>
      <td>
        <input className={s.checkbox} name="studentSelect" type="checkbox" />
      </td>
      <td>150</td>
      <td>Aнастасія Скоробагатько</td>
      <td>daria.serhiienko@gmail.com</td>
      <td>FS25</td>
      {/* <td>+38 050 123 45 67</td> */}
      <td className={s.testTitle}>JavaScript</td>
      <td>
        <TestStatus status="success" />
      </td>
      <td>48/50</td>
      <td></td>
      <td></td>
    </tr>
  )
}
