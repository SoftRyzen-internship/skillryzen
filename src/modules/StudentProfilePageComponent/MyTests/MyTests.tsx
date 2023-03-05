import { useTranslation } from 'react-i18next';

import { Theme, UserInfo } from 'modules/common/types';

import s from './MyTests.module.scss';

interface MyTestsProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyTests = ({ userInfo, theme }: MyTestsProps) => {
  const { t } = useTranslation();

  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>{t('userProfile.testsTitle')}</p>
    </div>
  );
};
