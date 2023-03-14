import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { removeResults } from 'redux/testingInfo/testingInfoSlise';
import {
  getResultTime,
  getTotalCount,
  getPercentageOfCorrectAnswers,
  getTestName,
  getIsPassed,
} from 'redux/testingInfo/testingInfoSelectors';
import { useAppDispatch } from 'hooks/hook';

import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';
import { TestInfoContainer } from '../TestInfoContainer';

import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { ROUTES } from 'routes/routes.const';
import { convertTime } from 'utils/convertTime';

export const TestEndPageComponent = () => {
  const dispatch = useAppDispatch();

  const testName = useSelector(getTestName);
  const isPassed = useSelector(getIsPassed);
  const testSeconds = useSelector(getResultTime);
  const correctAnswersPercentage = useSelector(getPercentageOfCorrectAnswers);
  const totalQuestions = useSelector(getTotalCount);

  const testTime = convertTime(testSeconds);

  const navigate = useNavigate();

  const handleClickBtn = () => {
    dispatch(removeResults());
    navigate(ROUTES.CERTIFICATION);
  };

  return (
    <TestInfoContainer>
      <FinalTestInfo
        image={IMAGES.JAVA_SCRIPT}
        imageProps={{ alt: 'Java Script', width: '120', height: '120' }}
        title={testName}
        correctAnswers={(correctAnswersPercentage * totalQuestions) / 100}
        totalQuestions={totalQuestions}
        timeSpent={testTime}
        isPassed={isPassed}
        iconAnswers={ICONS.CHECK_SMALL}
        iconTime={ICONS.CLOCK}
        onClickBtn={handleClickBtn}
        textBtn='End test'
        test='JS'
        finishTest
      />
    </TestInfoContainer>
  );
};
