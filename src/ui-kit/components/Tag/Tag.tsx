import { useTranslation } from 'react-i18next';

import { Theme } from 'constans/types';

import s from './Tag.module.scss';

interface Tag {
  type: 'field' | 'number' | 'time';
  label: string;
  icon?: boolean;
  theme?: Theme;
  testStatus?: string;
}

export const Tag = ({
  label,
  type,
  icon = false,
  theme = 'dark',
  testStatus,
}: Tag) => {
  const { t } = useTranslation();

  return (
    <p
      className={`${s[`tag--${type}`]} ${s[`tag--${type}--${theme}`]} ${
        icon && s['tag--icon']
      } ${testStatus === 'disabled' && s.tagFieldDisabled} `}
    >
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
