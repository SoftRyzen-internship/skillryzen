import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TestCard } from 'ui-kit';
import { Item } from '../TestsPageComponent';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { setTemplateId } from 'redux/testingInfo/testingInfoSlise';
import { useAppDispatch } from 'hooks/hook';

import s from './TestsCardsList.module.scss';

interface TestsList {
  size: 'large' | 'small';
  testsArray: Item[];
}

export const TestsCardsList = ({ size, testsArray }: TestsList) => {
  const { theme }: IThemeContext = useThemeContext();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const templateHandler = (id: string) => {
    dispatch(setTemplateId('6ba378ad-82a6-4652-9298-0d4adaa9d2f3'));
  };

  const sortedTestsList = useMemo(() => {
    if (!testsArray.length) return [];

    const newArr = testsArray?.map((item) => {
      if (item.nextRetakeDate) {
        return { ...item, testStatus: 'disabled' };
      }
      if (item.wasStarted && !item.nextRetakeDate) {
        return { ...item, testStatus: 'tryAgain' };
      }
      if (!item.wasStarted) {
        return { ...item, testStatus: 'aviable' };
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    newObj?.disabled.sort(
      (a: Item, b: Item) =>
        a.nextRetakeDate.getTime() - b.nextRetakeDate.getTime()
    );

    const order = ['aviable', 'tryAgain', 'disabled'];

    return order.reduce((acc, key) => {
      return acc.concat(newObj[key]);
    }, []);
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
          }) => (
            <li key={id}>
              <Link
                to='fullstack_final'
                onClick={() => templateHandler(id.toString())}
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
