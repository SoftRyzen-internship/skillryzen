import { ICONS } from 'theme/icons.const';
import { IMGS } from 'theme/images.const';
import { FinalTestInfo } from 'modules/common/components/FinalTestInfo/FinalTestInfo';
import { TestInfoContainer } from './TestInfoContainer';
import { Navigate, useNavigate } from 'react-router';

export const TestInfo = () => {
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
  const navigate = useNavigate();

  const handleClickBtn = () => {
    console.log('start test');
    navigate('/testing');
  };

  return (
    <TestInfoContainer>
      <FinalTestInfo
        image={IMGS.JAVA_SCRIPT}
        imageProps={{ alt: 'Java Script', width: '146', height: '146' }}
        title='FullStack - Final Test'
        subtitle='JavaScript is a programming language that is one of the core
        technologies of the World Wide Web, alongside HTML and CSS.'
        listInfo={listInfoJS}
        onClickBtn={handleClickBtn}
        textBtn='Start test'
        test='JS'
      />
    </TestInfoContainer>
  );
};
