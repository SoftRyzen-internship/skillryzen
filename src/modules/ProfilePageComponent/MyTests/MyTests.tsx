import { useTranslation } from 'react-i18next';

import { Theme } from 'constans/types';

import s from './MyTests.module.scss';
import { Link } from 'react-router-dom';
import { TestCard } from 'ui-kit';
import { ROUTES } from 'routes/routes.const';

interface MyTestsProps {
  theme?: Theme;
}
const myTestsArr = [
  {
    id: 1,
    title: 'FullStuck_Final_Test',
    text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    fields: ['HTML', 'CSS', 'React', 'Javascript'],
    author: 'GoIt',
    number: 50,
    time: 3,
  },
  // {
  //   id: 2,
  //   title: 'FullStuck_Final_Test',
  //   text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
  //   fields: ['HTML', 'CSS', 'React', 'Javascript'],
  //   author: 'GoIt',
  //   number: 50,
  //   time: 3,
  // },
  // {
  //   id: 3,
  //   title: 'FullStuck_Final_Test',
  //   text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
  //   fields: ['HTML', 'CSS', 'React', 'Javascript'],
  //   author: 'GoIt',
  //   number: 50,
  //   time: 3,
  // },
  // {
  //   id: 4,
  //   title: 'FullStuck_Final_Test',
  //   text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
  //   fields: ['HTML', 'CSS', 'React', 'Javascript'],
  //   author: 'GoIt',
  //   number: 50,
  //   time: 3,
  // },
];

export const MyTests = ({ theme = 'dark' }: MyTestsProps) => {
  const { t } = useTranslation();
  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>
        {t('userProfile.testsCardTitle')}
      </p>

      {!myTestsArr || myTestsArr.length === 0 ? (
        <div className={`${s[`noDataText--${theme}`]}`}>
          {t('userProfile.noDataText')}
        </div>
      ) : (
        <ul className={s.cardList}>
          {myTestsArr.map((test, index) => {
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
