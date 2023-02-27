import { useState } from 'react';
import { FinalTestInfo } from '../../common/components/FinalTestInfo/FinalTestInfo';
import { IMGS } from '../../../theme/images.const';
import { ICONS } from 'theme/icons.const';

const listInfoJS = {
  topics: 'HTML, CSS, JavaScript, React',
  time: '2:00:00',
  questions: 50,
  learners: 200,
  author: 'GoIT',
  icons: {
    BAR: ICONS.BAR_TWO_LINE,
    CLOCK: ICONS.CLOCK,
    QUESTION: ICONS.QUESTION_ROUND,
    GROUP: ICONS.USER_GROUP,
    USERS: ICONS.USERS,
  },
};
const LoginPage = () => {
  const [isClickBtn, setIsClickBtn] = useState(false);
  const handleClickBtn = () => {
    setIsClickBtn(true);
  };
  return (
    // <FinalTestInfo
    //   image={IMGS.JAVA_SCRIPT}
    //   imageProps={{ alt: 'Java Script', width: '146', height: '146' }}
    //   title='FullStack - Final Test'
    //   subtitle='JavaScript is a programming language that is one of the core
    //     technologies of the World Wide Web, alongside HTML and CSS.'
    //   listInfo={listInfoJS}
    //   onClickBtn={handleClickBtn}
    //   textBtn='Start test'
    //   test='JS'
    // />
    <FinalTestInfo
      image={IMGS.JAVA_SCRIPT}
      imageProps={{ alt: 'Java Script', width: '146', height: '146' }}
      title='FullStack - Final Test'
      correctAnswers={15}
      totalQuestions={50}
      timeSpent={20}
      iconAnswers={ICONS.CHECK_MARK}
      iconTime={ICONS.CLOCK}
      theWorstTopic='“Asynchrony” section.'
      theBestTopic='"Lorem lorem lorem" section.'
      onClickBtn={handleClickBtn}
      textBtn='Start test'
      test='JS'
      finishTest
    />
  );
};

export default LoginPage;
