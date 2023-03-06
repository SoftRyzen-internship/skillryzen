import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { removeResults } from 'redux/testingInfo/testingInfoSlise';
import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';
import { TestInfoContainer } from '../TestInfoContainer';
import {
  getTimeTest,
  getPercentageOfCorrectAnswers,
} from 'redux/testingInfo/testingInfoSelectors';

import { ROUTES } from 'routes/routes.const';
import { useAppDispatch } from 'hooks/hook';

export const TestEndPageComponent = () => {
  const dispatch = useAppDispatch();

  const testTime = useSelector(getTimeTest);
  const correctAnswersPercentage = useSelector(getPercentageOfCorrectAnswers);
  const totalQuestions = 10;

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
        title='FullStack - Final Test'
        correctAnswers={(correctAnswersPercentage * totalQuestions) / 100}
        totalQuestions={totalQuestions}
        timeSpent={testTime}
        iconAnswers={ICONS.CHECK_SMALL}
        iconTime={ICONS.CLOCK}
        // theWorstTopic='“Asynchrony”'
        // theBestTopic='"Lorem lorem lorem"'
        onClickBtn={handleClickBtn}
        textBtn='End test'
        test='JS'
        finishTest
      />
    </TestInfoContainer>
  );
};
