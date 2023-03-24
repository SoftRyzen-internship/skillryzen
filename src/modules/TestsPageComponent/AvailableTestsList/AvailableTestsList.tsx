/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { getAvailableTests } from 'redux/testingInfo/testingInfoOperations';
import { setTemplateId } from 'redux/testingInfo/testingInfoSlice';
import { useAppDispatch, useCurrentWidth } from 'hooks';
import { convertToUTC } from 'utils/convertLocalTimeToUTC';
import { parseDate } from 'utils/parseDate';

import { TestCard } from 'ui-kit';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';

import s from './AvailableTestsList.module.scss';

interface Item {
  id: number;
  author?: string;
  name: string;
  description: string;
  blockNames: string[];
  questionsTotalCount: number;
  timeForCompletionInMs: number;
  percentageToPass: number;
  wasStarted: boolean;
  nextRetakeDate?: undefined | string | Date;
  testStatus?: string;
  avialableIn?: string;
}

interface TestsProps {
  size: 'large' | 'small';
}

export const AvailableTestsList = ({ size }: TestsProps) => {
  const [testsArray, setTestsArray] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { theme }: IThemeContext = useThemeContext();
  const dispatch = useAppDispatch();
  const currentWidth = useCurrentWidth();

  const templateHandler = (id: string, testStatus: string) => {
    if (testStatus === 'disabled') return;
    dispatch(setTemplateId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    getAvailableTests()
      .then(data => {
        setTestsArray(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const sortedTestsList = useMemo(() => {
    if (!testsArray.length) return [];

    // Додаємо до масиву тестів в кожен об'єкт поля 'available', 'tryAgain', 'disabled'
    const newArr = testsArray.map(item => {
      const utcDate = convertToUTC(new Date());
      const specificDate = new Date(item.nextRetakeDate);
      const specificDateUTC = convertToUTC(specificDate);
      const diffTime = specificDateUTC.getTime() - utcDate.getTime();
      return {
        ...item,
        testStatus:
          item.nextRetakeDate && diffTime > 0
            ? 'disabled'
            : item.wasStarted && diffTime < 0
            ? 'tryAgain'
            : 'available',
        nextRetakeDate: item.nextRetakeDate && specificDateUTC,
      };
    });

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
    newObj?.disabled?.sort((a: Item, b: Item) => {
      const aTime =
        a.nextRetakeDate instanceof Date && a.nextRetakeDate.getTime();
      const bTime =
        b.nextRetakeDate instanceof Date && b.nextRetakeDate.getTime();
      return aTime - bTime;
    });

    // Виводимо дату в задізейбленому тесті
    newObj?.disabled?.map((item: Item) => {
      const specificDate =
        item.nextRetakeDate instanceof Date && item.nextRetakeDate;
      item.avialableIn = parseDate(specificDate);
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

  const returnQuantity = (size: string): number => {
    if (size === 'large') {
      return 4;
    }
    if (currentWidth < 768) {
      return 2;
    }
    if (currentWidth < 1024) {
      return 4;
    }
    if (currentWidth < 1440) {
      return 6;
    }
    return 8;
  };

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
            avialableIn,
            testStatus,
          }) => (
            <li key={id}>
              <Link
                to={testStatus === 'disabled' ? '#' : 'fullstack_final'}
                onClick={() => templateHandler(id.toString(), testStatus)}
                className={testStatus === 'disabled' ? s.disabledLink : ''}
                state={{
                  author: author ? author : 'GoIt',
                  name,
                  description,
                  blockNames,
                  questionsTotalCount,
                  timeForCompletionInMs,
                  percentageToPass,
                }}
              >
                <TestCard
                  size={size}
                  item={{
                    author: author ? author : 'GoIt',
                    title: name,
                    text: description,
                    fields: blockNames,
                    number: questionsTotalCount,
                    time: Math.round(timeForCompletionInMs / 60000),
                    testStatus,
                    avialableIn,
                  }}
                  theme={theme}
                />
              </Link>
            </li>
          )
        )}
      {isLoading && (
        <Skeleton
          length={returnQuantity(size)}
          value='skeleton'
          className={`${s[`skeletonItem--${size}`]}`}
        />
      )}
    </ul>
  );
};
