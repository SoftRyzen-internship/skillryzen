/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { convertTestDate, convertTestTime } from 'utils/convertTime';
import { getCompletedTests } from 'redux/testingInfo/testingInfoOperations';

import { TestCard, Modal } from 'ui-kit';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';
import { ModalTestsInfo } from 'modules/Modals/ModalTestsInfo/ModalTestsInfo';

import s from './CompletedTestsList.module.scss';

interface Item {
  id: number;
  author: string;
  name: string;
  description: string;
  blockNames: string[];
  questions: [];
  timeForCompletionInMs: number;
  isPassed: boolean;
  percentageOfCorrectAnswers: number;
  retakeAttempt: number;
  finishedAt: string;
  startedAt: string;
}

interface TestsProps {
  size: 'large' | 'small';
}

export interface TestInfo {
  id: number;
  name: string;
  questions: number;
  percentageOfCorrectAnswers: number;
  isPassed: boolean;
  timeSpent: string;
  date: string;
}

const findTestDate = (end: string): string => {
  const endTime = new Date(end);
  const result = convertTestDate(endTime);
  return end ? result : '';
};

export const CompletedTestsList = ({ size }: TestsProps) => {
  const { t } = useTranslation();
  const [isShowModal, setIsShowModal] = useState(false);
  const [testInfo, setTestInfo] = useState<TestInfo>(null);
  const [testsArray, setTestsArray] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { theme }: IThemeContext = useThemeContext();

  useEffect(() => {
    setIsLoading(true);
    getCompletedTests()
      .then(data => {
        setTestsArray(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const findTestTime = (end: string, start: string): string => {
    const endTime = new Date(end);
    const startTime = new Date(start);
    const timeInSec = (endTime.getTime() - startTime.getTime()) / 1000;
    const result = convertTestTime(
      timeInSec,
      t('finalTestInfo.min'),
      t('finalTestInfo.sec')
    );
    return end ? result : '0';
  };

  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  const handleClickItem = (
    id: number,
    name: string,
    questions: [],
    percentageOfCorrectAnswers: number,
    isPassed: boolean,
    finishedAt: string,
    startedAt: string
  ) => {
    setTestInfo({
      id,
      name,
      questions: questions.length,
      percentageOfCorrectAnswers,
      isPassed,
      timeSpent: findTestTime(finishedAt, startedAt),
      date: findTestDate(finishedAt),
    });
    handleClickModal();
  };

  return (
    <>
      <ul className={`${s[`testsList--${size}`]}`}>
        {testsArray.map(
          ({
            id,
            author,
            name,
            description,
            blockNames,
            questions,
            timeForCompletionInMs,
            isPassed,
            percentageOfCorrectAnswers,
            retakeAttempt,
            finishedAt,
            startedAt,
          }) => (
            <li
              key={id}
              onClick={() =>
                handleClickItem(
                  id,
                  name,
                  questions,
                  percentageOfCorrectAnswers,
                  isPassed,
                  finishedAt,
                  startedAt
                )
              }
              className={s.item}
            >
              <TestCard
                size={size}
                item={{
                  author: author ? author : 'GoIt',
                  title: name,
                  text: description,
                  fields: blockNames,
                  number: questions.length,
                  time: Math.round(timeForCompletionInMs / 60000),
                  testStatus: isPassed ? 'done' : 'failed',
                  testDate: findTestDate(finishedAt),
                  attempts: retakeAttempt + 1,
                  percentageOfCorrectAnswers: Math.round(
                    percentageOfCorrectAnswers * 100
                  ),
                }}
                theme={theme}
              />
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
      {isShowModal && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          <ModalTestsInfo testInfo={testInfo} />
        </Modal>
      )}
    </>
  );
};
