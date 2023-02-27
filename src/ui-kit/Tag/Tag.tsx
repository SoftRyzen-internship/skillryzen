import React from 'react';

// @ts-ignore
import { ICONS } from 'theme/icons.const';
import s from './Tag.module.scss';

interface ITag {
  type: 'field' | 'number' | 'time';
  label: string;
  icon?: boolean;
}

export const Tag: React.FC<ITag> = ({ label, type, icon = false }) => {
  return (
    <p className={`${s[`tag--${type}`]} ${icon && s['tag--icon']} `}>
      {type === 'time' && <span className={s.label}>{label} год</span>}
      {type !== 'time' && label}
      {icon && <img src={ICONS.CLOSE} width='12' height='12' alt='close' />}
    </p>
  );
};
