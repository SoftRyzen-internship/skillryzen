import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { Input } from 'ui-kit/index';

import s from './HeaderInput.module.scss';

export const HeaderInput = () => {
  const { t } = useTranslation();
  return (
    <Input
      className={s.input}
      name='header-find'
      placeholder={t('header.search')}
      button={true}
      icon={<ICONS.SEARCH fill='#9D9FB5' />}
    />
  );
};
