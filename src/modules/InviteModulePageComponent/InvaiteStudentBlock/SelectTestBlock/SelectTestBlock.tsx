import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';

import { Select } from 'ui-kit';

import s from './SelectTestBlock.module.scss';

export const SelectTestBlock = () => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <h3 className={s.title}>Choose test</h3>
      <Select />
    </div>
  );
};
