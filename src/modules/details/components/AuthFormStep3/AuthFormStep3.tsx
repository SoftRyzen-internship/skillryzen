import s from './AuthFormStep3.module.scss';
import { AuthButton, Input } from '../../../../ui-kit/index';

export const AuthFormStep3 = () => {
  const handleClick = () => {};
  return (
    <form action=''>
      <ul>
        <li className={s.list__item}>
          <Input name='name' placeholder='Name' />
          <Input name='name' placeholder='Name'></Input>
        </li>
        <li className={s.list__item}>
          <Input name='surname' placeholder='Surname'></Input>
        </li>
        <li className={s.list__item}>
          <Input name='Phone' placeholder='Phone'></Input>
        </li>
      </ul>

      <AuthButton
        type='submit'
        text='Continue'
        size='small'
        color='grey'
        onClick={handleClick}
      />
    </form>
  );
};
