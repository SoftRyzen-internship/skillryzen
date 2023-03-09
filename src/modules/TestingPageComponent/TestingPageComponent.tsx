import { useEffect } from 'react';

import { TestQuestion } from './TestQuestion/TestQuestion';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { getRandomTest } from 'redux/testingInfo/testingInfoOperations';
import { getQuestionId } from 'redux/testingInfo/testingInfoSelectors';

export const TestingPageComponent = () => {
  const questionId = useAppSelector(getQuestionId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questionId) return;
    dispatch(getRandomTest());
    // eslint-disable-next-line
  }, []);

  return <TestQuestion />;
};
