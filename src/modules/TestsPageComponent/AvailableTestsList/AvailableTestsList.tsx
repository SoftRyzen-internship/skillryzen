import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { TestCard } from 'ui-kit';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { getAvailableTests } from 'redux/testingInfo/testingInfoOperations';
import { setTemplateId } from 'redux/testingInfo/testingInfoSlise';
import { useAppDispatch } from 'hooks/hook';

import s from './AvailableTestsList.module.scss';

interface Item {
  id: number;
  author: string;
  name: string;
  description: string;
  blockNames: string[];
  questionsTotalCount: number;
  timeForCompletionInMs: number;
  percentageToPass: number;
  wasStarted: boolean;
  nextRetakeDate?: undefined | Date;
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

  const templateHandler = (id: string, nextRetakeDate: undefined | Date) => {
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

  //   const sortedTestsList = useMemo(() => {
  //     if (!testsArray.length) return [];

  //     const newArr = testsArray?.map(item => {
  //       if (item.nextRetakeDate) {
  //         return { ...item, testStatus: 'disabled' };
  //       }
  //       if (item.wasStarted && !item.nextRetakeDate) {
  //         return { ...item, testStatus: 'tryAgain' };
  //       }
  //       if (!item.wasStarted) {
  //         return { ...item, testStatus: 'available' };
  //       }
  //     });

  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     const newObj = newArr?.reduce((acc: any, item: Item) => {
  //       const callback = (item: Item) => item.testStatus;
  //       const key = callback(item);

  //       let sublist = acc[key];
  //       if (!sublist) {
  //         sublist = [];
  //         acc[key] = sublist;
  //       }
  //       sublist.push(item);

  //       return acc;
  //     }, {});

  //     newObj?.disabled.sort(
  //       (a: Item, b: Item) =>
  //         a.nextRetakeDate.getTime() - b.nextRetakeDate.getTime()
  //     );

  //     newObj?.disabled.map((item: Item) => {
  //       const today = new Date();
  //       const specificDate = item.nextRetakeDate;

  //       const diffTime = specificDate.getTime() - today.getTime();
  //       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //       const diffHours = Math.ceil((diffTime / (1000 * 60 * 60)) % 24);

  //       item.avialableIn = `Available in ${diffDays} days ${diffHours} hours`;
  //     });

  //     const order = ['available', 'tryAgain', 'disabled'];

  //     return Object.values(newObj)
  //       .flat(1)
  //       .sort(
  //         (a: Item, b: Item) =>
  //           order.indexOf(a.testStatus) - order.indexOf(b.testStatus)
  //       );
  //   }, [testsArray]);

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {testsArray.length > 0 &&
        testsArray.map(
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
