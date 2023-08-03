import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';
import { ICONS } from 'ui-kit/icons';

import { Select } from 'ui-kit';

import s from './SelectTest.module.scss';

export const SelectTest = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className={`${s.wrapper} ${s[`wrapper--${theme}`]}`}>
      <h3 className={s.title}>{t('invite.choose.test')}</h3>
      <Select
        title='Final Test Frontend'
        selectList={[
          {
            id: '1',
            icon: <ICONS.CIRCLE width={20} height={20} />,
            selectItem: '',
          },
          {
            id: '2',
            icon: <ICONS.CIRCLE width={20} height={20} />,
            selectItem: '',
          },
          {
            id: '3',
            icon: <ICONS.CIRCLE width={20} height={20} />,
            selectItem: '',
          },
        ]}
      />
    </div>
  );
};
