/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { TestCard } from 'ui-kit';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { getAvailableTests } from 'redux/testingInfo/testingInfoOperations';
import { setTemplateId } from 'redux/testingInfo/testingInfoSlise';
import { useAppDispatch } from 'hooks/hook';
import { convertToUTC } from 'utils/convertLocalTimeToUTC';
import { parseDate } from 'utils/parseDate';

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

  const templateHandler = (
    id: string,
    nextRetakeDate: undefined | string | Date
  ) => {
    if (nextRetakeDate) return;
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
      const utcDate = convertToUTC();
      const specificDate = new Date(item.nextRetakeDate);
      const diffTime = specificDate.getTime() - utcDate.getTime();

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
                  author: author ? author : 'GoIt',
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
                    author: author ? author : 'GoIt',
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
      {isLoading && (
        <Skeleton
          length={size === 'large' ? 4 : 8}
          value='skeleton'
          className={`${s[`skeletonItem--${size}`]}`}
        />
      )}
    </ul>
  );
};
