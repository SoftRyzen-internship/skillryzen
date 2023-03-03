import { useNavigate } from 'react-router';

import { ICONS } from 'theme/icons.const';
import { IMGS } from 'theme/images.const';
import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';

export const TestStartPageComponent = () => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate('/student/certification');
  };

  return (
    <FinalTestInfo
      image={IMGS.JAVA_SCRIPT}
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
      textBtn='Start test'
      test='JS'
      finishTest
    />
  );
};
