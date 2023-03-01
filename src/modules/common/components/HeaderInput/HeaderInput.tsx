import { useTranslation } from 'react-i18next';
import { Input } from 'ui-kit/index';
import { ICONS } from 'theme/icons.const';

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
