// import { ICONS } from 'theme';

import s from './Tag.module.scss';

interface ITag {
  type: 'field' | 'number' | 'time';
  label: string;
  icon?: boolean;
}

export const Tag = ({ label, type, icon = false }: ITag) => {
  return (
    <p className={`${s[`tag--${type}`]} ${icon && s['tag--icon']} `}>
      {type === 'time' && <span className={s.label}>{label} год</span>}
      {type !== 'time' && label}
      {/* {icon && <ICONS.CLOSE className={s.tag__icon/>} */}
    </p>
  );
};
