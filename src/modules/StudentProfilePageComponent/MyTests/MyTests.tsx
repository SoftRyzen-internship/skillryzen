import { useTranslation } from 'react-i18next';


import { Theme, UserInfo } from 'constans/types';

import s from './MyTests.module.scss';
import { Link } from 'react-router-dom';
import {TestCard } from 'ui-kit';
import { ROUTES } from 'routes/routes.const';

interface MyTestsProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyTests = ({ userInfo, theme }: MyTestsProps) => {
  const { t } = useTranslation();
  const { tests } = userInfo;

  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>
        {t('userProfile.testsCardTitle')}
      </p>

      {!tests || tests.length === 0 ? (
        <div className={`${s[`noDataText--${theme}`]}`}>
          {t('userProfile.noDataText')}
        </div>
      ) : (
        <ul className={s.cardList}>
          {tests.map((test, index) => {
            return (
              <li key={test.id}>
                <Link to={`${ROUTES.CERTIFICATION}/fullstack_final`}>
                  <TestCard
                    className={`${s[`card--${theme}`]}`}
                    size={'small'}
                    item={{
                      author: test.author,
                      title: test.title,
                      text: test.text,
                      fields: test.fields,
                      number: test.number,
                      time: test.time,
                    }}
                    theme={theme}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
