// import { ICONS } from 'theme';
import { useTranslation } from 'react-i18next';
import s from './Tag.module.scss';

interface ITag {
  type: 'field' | 'number' | 'time';
  label: string;
  icon?: boolean;
}

export const Tag = ({ label, type, icon = false }: ITag) => {
  const { t } = useTranslation();
  return (
    <p className={`${s[`tag--${type}`]} ${icon && s['tag--icon']} `}>
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
