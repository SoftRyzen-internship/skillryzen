import { useNavigate } from 'react-router';

import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';
import { TestInfoContainer } from '../TestInfoContainer';

import { Breadcrumbs } from 'ui-kit';
import { ROUTES } from 'routes/routes.const';
import { getTotalCount } from 'redux/testingInfo/testingInfoSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { removeResults } from 'redux/testingInfo/testingInfoSlise';

export const TestStartPageComponent = () => {
  const total = useAppSelector(getTotalCount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const listInfoJS = {
    topics: 'HTML, CSS, JavaScript, React',
    time: '2:00:00',
    questions: 50,
    learners: 200,
    author: 'GoIT',
    icons: {
      BAR: ICONS.BAR_ONE_LINE,
      BAR_LIGHT: ICONS.BAR_ONE_LINE_LIGHT,
      CLOCK: ICONS.CLOCK,
      QUESTION: ICONS.QUESTION_CIRCLE,
      USERS: ICONS.USERS,
      USER: ICONS.USER,
    },
  };

  const handleClickBtn = () => {
    if (total) {
      dispatch(removeResults());
    }
    navigate(ROUTES.TESTING);
  };

  return (
    <TestInfoContainer>
      <Breadcrumbs />
      <FinalTestInfo
        image={IMAGES.JAVA_SCRIPT}
        imageProps={{ alt: 'Java Script', width: '120', height: '120' }}
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
