import { Theme } from 'modules/common/types';
import { useTranslation } from 'react-i18next';

import s from './Tag.module.scss';

interface ITag {
  type: 'field' | 'number' | 'time';
  label: string;
  icon?: boolean;
  theme?: Theme;
}

export const Tag = ({ label, type, icon = false, theme="dark" }: ITag) => {
  const { t } = useTranslation();
  
  return (
    <p className={`${s[`tag--${type}`]} ${s[`tag--${type}--${theme}`]} ${icon && s['tag--icon']} `}>
      {type === 'time' && (
        <span className={s.label}>
          {label} {t('testsMain.time')}
        </span>
      )}
      {type !== 'time' && label}
      {/* {icon && <ICONS.CLOSE className={s.tag__icon/>} */}
    </p>
  );
};
