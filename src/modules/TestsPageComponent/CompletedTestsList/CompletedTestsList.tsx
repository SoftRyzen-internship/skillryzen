import { useEffect, useState } from 'react';

import { TestCard, Modal } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { getCompletedTests } from 'redux/testingInfo/testingInfoOperations';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';
import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';

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

export const CompletedTestsList = ({ size }: TestsProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [testsArray, setTestsArray] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { theme }: IThemeContext = useThemeContext();

  useEffect(() => {
    setIsLoading(true);
    getCompletedTests()
      .then(data => {
        setTestsArray(data);
        // console.log(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const findTestTime = (end: string, start: string): number => {
    const endTime = new Date(end);
    const startTime = new Date(start);
    return (endTime.getTime() - startTime.getTime()) / 1000;
  };

  const convertTestDate = (end: string): string => {
    const endTime = new Date(end);
    return `${endTime.getDate()}.${String(endTime.getMonth() + 1).padStart(
      2,
      '0'
    )}.${String(endTime.getFullYear()).slice(2)}`;
  };

  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  return (
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
          <li key={id} onClick={handleClickModal} className={s.item}>
            <TestCard
              size={size}
              item={{
                author: author ? author : 'GoIt',
                title: name,
                text: description ? description : 'Welcome to Star class LMS!',
                fields:
                  blockNames?.length !== 0
                    ? blockNames
                    : ['React', 'JS', 'HTML+CSS'],
                number: questions.length,
                time: Math.round(timeForCompletionInMs / 60000),
                testStatus: isPassed ? 'done' : 'failed',
                testDate: convertTestDate(finishedAt),
                attempts: retakeAttempt ? retakeAttempt + 1 : '?',
                percentageOfCorrectAnswers: Math.round(
                  percentageOfCorrectAnswers * 100
                ),
              }}
              theme={theme}
            />
            {isShowModal && (
              <Modal
                isShowModal={isShowModal}
                onClick={handleClickModal}
                isCloseIcon
              >
                <FinalTestInfo
                  image={IMAGES.JAVA_SCRIPT}
                  imageProps={{
                    alt: 'Java Script',
                    width: '120',
                    height: '120',
                  }}
                  title={name}
                  correctAnswers={percentageOfCorrectAnswers * questions.length}
                  totalQuestions={questions.length}
                  timeSpent={'333'}
                  isPassed={isPassed}
                  iconAnswers={ICONS.CHECK_SMALL}
                  iconTime={ICONS.CLOCK}
                  onClickBtn={handleClickModal}
                  finishTest
                  date={new Date()}
                />
              </Modal>
            )}
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
