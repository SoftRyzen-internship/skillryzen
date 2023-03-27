import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from 'routes/routes.const';

import { TestCard } from 'ui-kit';

import { Theme } from 'constans/types';

import s from './CompanyTests.module.scss';

interface CompanyTestsProps {
  theme?: Theme;
}
interface TestCard {
  id: number;
  title: string;
  text: string;
  fields: string[];
  author: string;
  number: number;
  time: number;
  testStatus: 'disabled' | 'available' | 'tryAgain' | 'done' | 'failed';
}

const COMPANY_TESTS: TestCard[] = [
  {
    id: 1,
    title: 'FullStuck_Final_Test',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    fields: ['HTML', 'CSS', 'React', 'Javascript'],
    author: 'GoIt',
    number: 50,
    time: 3,
    testStatus: 'available',
  },
];

export const CompanyTests = ({ theme = 'dark' }: CompanyTestsProps) => {
  const { t } = useTranslation();
  return !COMPANY_TESTS || !COMPANY_TESTS.length ? null : (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>
        {t('userProfile.testsCardTitle')}
      </p>
      <ul className={s.cardList}>
        {COMPANY_TESTS.map(test => {
          return (
            <li key={test.id}>
              <Link to={`${ROUTES.COMPANY_CERTIFICATION}/${test.id}`}>
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
                    testStatus: test.testStatus,
                  }}
                  theme={theme}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
