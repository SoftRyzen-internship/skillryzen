import { useTranslation } from 'react-i18next';

import { CardSlider } from './CardSlider';

import { Theme, UserInfo } from 'constans/types';

import s from './MyTests.module.scss';

interface MyTestsProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyTests = ({ userInfo, theme }: MyTestsProps) => {
  const { t } = useTranslation();
  const { tests } = userInfo;

  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>{t('userProfile.testsTitle')}</p>

      {!tests || tests.length === 0 ? (
        <div className={`${s[`noDataText--${theme}`]}`}>
          {t('userProfile.noDataText')}
        </div>
      ) : (
        <CardSlider cards={tests} cardWidth={284} cardGap={28} theme={theme} />
      )}
    </div>
  );
};
