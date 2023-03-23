import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';
import { TestInfoContainer } from '../TestInfoContainer';
import { Breadcrumbs } from 'ui-kit';

import s from '../FinalTestInfo/FinalTestInfo.module.scss';

export const TestStartPageComponent = () => {
  const location = useLocation();

  const [state, setState] = useState(location.state || {});

  const {
    author,
    name,
    description,
    blockNames,
    questionsTotalCount,
    timeForCompletionInMs,
    percentageToPass,
  } = state;

  const listInfoJS = {
    topics: blockNames || '',
    time: timeForCompletionInMs || 0,
    questions: questionsTotalCount || 0,
    percentageToPass: percentageToPass || 0,
    author: author || '',
    icons: {
      BAR: ICONS.BAR_ONE_LINE,
      BAR_LIGHT: ICONS.BAR_ONE_LINE_LIGHT,
      CLOCK: ICONS.CLOCK,
      QUESTION: ICONS.QUESTION_CIRCLE,
      USERS: ICONS.USERS,
      USER: ICONS.USER,
      PERCENTAGE: ICONS.PERCENTAGE,
    },
  };

  return (
    <>
      <div className={s.breadcrumbsContainer}>
        <Breadcrumbs />
      </div>
      <TestInfoContainer>
        <FinalTestInfo
          image={IMAGES.JAVA_SCRIPT}
          imageProps={{ alt: 'Java Script', width: '80', height: '80' }}
          title={name || ''}
          subtitle={description || ''}
          listInfo={listInfoJS}
          textBtn='Start test'
          test='JS'
        />
      </TestInfoContainer>
    </>
  );
};
