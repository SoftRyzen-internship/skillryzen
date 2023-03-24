import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { ROUTES } from 'routes/routes.const';
import { convertTestDate, convertTestTime } from 'utils/convertTime';
import { useAppDispatch } from 'hooks';
import {
  getResultTime,
  getTotalCount,
  getNumberOfCorrectAnswers,
  getTestName,
  getIsPassed,
} from 'redux/testingInfo/testingInfoSelectors';
import { removeResults } from 'redux/testingInfo/testingInfoSlice';

import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';

export const TestEndPageComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const testName = useSelector(getTestName);
  const isPassed = useSelector(getIsPassed);
  const testSeconds = useSelector(getResultTime);
  const correctAnswers = useSelector(getNumberOfCorrectAnswers);
  const totalQuestions = useSelector(getTotalCount);

  const testTime = convertTestTime(
    testSeconds,
    t('finalTestInfo.min'),
    t('finalTestInfo.sec')
  );

  const handleClickBtn = () => {
    dispatch(removeResults());
    navigate(ROUTES.CERTIFICATION);
  };

  return (
      <FinalTestInfo
        image={IMAGES.JAVA_SCRIPT}
        imageProps={{ alt: 'Java Script', width: '80', height: '80' }}
        title={testName}
        correctAnswers={correctAnswers}
        totalQuestions={totalQuestions}
        timeSpent={testTime}
        isPassed={isPassed}
        iconAnswers={ICONS.CHECK_SMALL}
        iconTime={ICONS.CLOCK}
        iconDate={ICONS.DATE}
        onClickBtn={handleClickBtn}
        textBtn='End test'
        modal={false}
        date={convertTestDate(new Date())}
        test='JS'
        finishTest
      />
  );
};
