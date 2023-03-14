import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  const { author, name, description, blockNames, questionsTotalCount, timeForCompletionInMs } = location.state || {};

  const listInfoJS = {
    topics: blockNames || "",
    time: timeForCompletionInMs || 0,
    questions: questionsTotalCount || 0,
    learners: 200,
    author: author || '',
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
        title={name || ''}
        subtitle={description || ''}
        listInfo={listInfoJS}
        onClickBtn={handleClickBtn}
        textBtn='Start test'
        test='JS'
      />
    </TestInfoContainer>
  );
};
