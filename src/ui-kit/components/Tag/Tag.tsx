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
  theme = 'dark',
  testStatus,
}: Tag) => {
  const { t } = useTranslation();

  return (
    <p
      className={`${s[`tag--${type}`]} ${s[`tag--${type}--${theme}`]} ${
        testStatus === 'disabled' && s.tagFieldDisabled
      }`}
    >
      {type === 'time' && (
        <span className={s.label}>
          {label} {t('testsMain.time')}
        </span>
      )}
      {type !== 'time' && label}
    </p>
  );
};
