import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Card, IconButton } from 'ui-kit';

import { Theme, UserInfo } from 'constans/types';

import s from './MyTests.module.scss';

interface MyTestsProps {
  userInfo: UserInfo;
  theme?: Theme;
}

export const MyTests = ({ userInfo, theme }: MyTestsProps) => {
  const { t } = useTranslation();
  const { tests } = userInfo;
  const offset = 312;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    if (currentIndex >= tests.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(tests.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={`${s[`container--${theme}`]}`}>
      <p className={`${s[`title--${theme}`]}`}>{t('userProfile.testsTitle')}</p>

      {!tests || tests.length === 0 ? (
        <div className={`${s[`noDataText--${theme}`]}`}>
          {t('userProfile.noDataText')}
        </div>
      ) : (
        <>
          <div className={s.slider}>
            <ul
              className={s.cardList}
              style={{ transform: `translateX(-${currentIndex * offset}px)` }}
            >
              {tests.map((test, index) => {
                return (
                  <li key={index}>
                    <Card
                      className={`${s[`card--${theme}`]}`}
                      type='info'
                      size='small'
                      item={{
                        title: test.title,
                        text: test.text,
                        fields: test.fields,
                        number:
                          test.number + ' ' + t('testsMain.numberOfQuestions'),
                        time: test.time,
                      }}
                      theme={theme}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className={s.buttonList}>
            <li className={s.buttonItem}>
              <IconButton
                className={`${s[`button--${theme}`]}`}
                onClick={handlePrevSlide}
                type='button'
                disabled={currentIndex <= 0}
                color='black'
                icon='left'
                theme={theme}
              />
            </li>

            <li className={s.buttonItem}>
              <IconButton
                className={`${s[`button--${theme}`]}`}
                onClick={handleNextSlide}
                type='button'
                disabled={currentIndex >= tests.length - 2}
                color='black'
                icon='right'
                theme={theme}
              />
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
