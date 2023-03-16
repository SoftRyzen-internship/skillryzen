/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { TestCard } from 'ui-kit';
import { Item } from '../TestsPageComponent';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { getAvailableTests } from 'redux/testingInfo/testingInfoOperations';
import { setTemplateId } from 'redux/testingInfo/testingInfoSlise';
import { useAppDispatch } from 'hooks/hook';
import { convertToUTC } from 'utils/convertLocalTimeToUTC';

import s from './TestsCardsList.module.scss';

interface TestsList {
  size: 'large' | 'small';
  testsArray: Item[];
}

export const TestsCardsList = ({ size, testsArray }: TestsList) => {
  // const [testsArray, setTestsArray] = useState<Item[]>([]);
  const { theme }: IThemeContext = useThemeContext();
  const dispatch = useAppDispatch();

  const templateHandler = (id: string, nextRetakeDate: boolean) => {
    if (nextRetakeDate) return;
    dispatch(setTemplateId('30ee04ea-dfcf-490b-8f39-016e7d1bc31e'));
  };

  useEffect(() => {
    getAvailableTests()
      .then(data => {
        // setTestsArray(data),
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  const sortedTestsList = useMemo(() => {
    if (!testsArray.length) return [];

    // Додаємо до масиву тестів в кожен об'єкт поля 'available', 'tryAgain', 'disabled'
    const newArr = testsArray.map(item => {
      const utcDate = convertToUTC();
      const specificDate = new Date(item.nextRetakeDate);
      const diffTime = specificDate.getTime() - utcDate.getTime();
      console.log('diffTime', item.id, diffTime);

      return {
        ...item,
        testStatus:
          item.nextRetakeDate && diffTime > 0
            ? 'disabled'
            : item.wasStarted || (item.nextRetakeDate && diffTime < 0)
            ? 'tryAgain'
            : 'available',
        nextRetakeDate: item.nextRetakeDate && specificDate,
      };
    });

    console.log('newArr', newArr);

    // Створюємо об'єкт з полями 'available', 'tryAgain', 'disabled', в кожному з яких відсортовані масиви
    const newObj = newArr?.reduce((acc: any, item: Item) => {
      const callback = (item: Item) => item.testStatus;
      const key = callback(item);

      let sublist = acc[key];
      if (!sublist) {
        sublist = [];
        acc[key] = sublist;
      }
      sublist.push(item);

      return acc;
    }, {});

    // Сортуємо масив задізейблених тестів по даті
    newObj?.disabled.sort((a: Item, b: Item) => {
      const aTime =
        a.nextRetakeDate instanceof Date && a.nextRetakeDate.getTime();
      const bTime =
        b.nextRetakeDate instanceof Date && b.nextRetakeDate.getTime();
      return aTime - bTime;
    });

    // Виводимо дату в задізейбленому тесті
    newObj?.disabled.map((item: Item) => {
      const localDate = new Date();
      const timezoneOffset = localDate.getTimezoneOffset();
      const utcDate = new Date(localDate.getTime() - timezoneOffset * 60000);
      const specificDate =
        item.nextRetakeDate instanceof Date && item.nextRetakeDate;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const diffTime = specificDate.getTime() - utcDate.getTime();

      const days = Math.floor(diffTime / day);
      const hours = Math.floor((diffTime % day) / hour);
      const minutes = Math.floor(((diffTime % day) % hour) / minute);
      const weeks = Math.floor(days / 7);

      if (weeks) {
        item.avialableIn = `Available in ${weeks} weeks`;
        return;
      }
      if (days) {
        item.avialableIn = `Available in ${days} days`;
        return;
      }
      if (hours) {
        item.avialableIn = `Available in ${hours} hours`;
        return;
      }
      if (minutes) {
        item.avialableIn = `Available in ${minutes} minutes`;
        return;
      }
    });

    const order = ['available', 'tryAgain', 'disabled'];

    // Розпилюємо об'єкт відсортованиїх масиві в один масив і повертаємо його
    return Object.values(newObj)
      .flat(1)
      .sort(
        (a: Item, b: Item) =>
          order.indexOf(a.testStatus) - order.indexOf(b.testStatus)
      );
  }, [testsArray]);

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {sortedTestsList.length > 0 &&
        sortedTestsList.map(
          ({
            id,
            author,
            name,
            description,
            blockNames,
            questionsTotalCount,
            timeForCompletionInMs,
            percentageToPass,
            wasStarted,
            nextRetakeDate,
            testStatus,
            avialableIn,
          }) => (
            <li key={id}>
              <Link
                to={nextRetakeDate ? '#' : 'fullstack_final'}
                onClick={() => templateHandler(id.toString(), nextRetakeDate)}
                className={nextRetakeDate && s.disabledLink}
                state={{
                  author,
                  name,
                  description,
                  blockNames,
                  questionsTotalCount,
                  timeForCompletionInMs,
                }}
              >
                <TestCard
                  size={size}
                  item={{
                    author,
                    title: name,
                    text: description,
                    fields: blockNames,
                    number: questionsTotalCount,
                    time: timeForCompletionInMs / 60000,
                    testStatus,
                    avialableIn,
                  }}
                  theme={theme}
                />
              </Link>
            </li>
          )
        )}
    </ul>
  );
};
