import { useEffect } from 'react';

import { TestQuestion } from './TestQuestion/TestQuestion';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getTestTemplate } from 'redux/testingInfo/testingInfoOperations';
import { getQuestionId } from 'redux/testingInfo/testingInfoSelectors';

export const TestingPageComponent = () => {
  const questionId = useAppSelector(getQuestionId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questionId) return;
    dispatch(getTestTemplate());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const removeHistory = () =>
      history.pushState(null, null, window.location.href);

    removeHistory();

    window.addEventListener('popstate', removeHistory);

    return () => window.removeEventListener('popstate', removeHistory);
  }, []);

  return <TestQuestion />;
};
