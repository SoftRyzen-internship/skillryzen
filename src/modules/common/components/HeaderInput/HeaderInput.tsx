import { Input } from 'ui-kit/index';
import { ICONS } from 'theme/icons.const';
import s from './HeaderInput.module.scss';
export const HeaderInput = () => {
  return (
    <Input
      className={s.input}
      name='header-find'
      placeholder='Search..'
      button={true}
      icon={<ICONS.SEARCH fill='#9D9FB5' />}
    />
  );
};
