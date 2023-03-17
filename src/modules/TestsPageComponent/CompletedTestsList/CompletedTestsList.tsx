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
        }) => (
          <li key={id} onClick={() => setIsShowModal(true)} className={s.item}>
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
