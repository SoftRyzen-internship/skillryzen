import { useNavigate } from 'react-router';

import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';
import { TestInfoContainer } from '../TestInfoContainer';

export const TestEndPageComponent = () => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate('/student/certification');
  };

  return (
    <TestInfoContainer>
      <FinalTestInfo
        image={IMAGES.JAVA_SCRIPT}
        imageProps={{ alt: 'Java Script', width: '120', height: '120' }}
        title='FullStack - Final Test'
        correctAnswers={15}
        totalQuestions={50}
        timeSpent={20}
        iconAnswers={ICONS.CHECK_SMALL}
        iconTime={ICONS.CLOCK}
        theWorstTopic='“Asynchrony”'
        theBestTopic='"Lorem lorem lorem"'
        onClickBtn={handleClickBtn}
        textBtn='End test'
        test='JS'
        finishTest
      />
    </TestInfoContainer>
  );
};
