import { useEffect } from 'react';

import { TestQuestion } from './TestQuestion/TestQuestion';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { getRandomTest } from 'redux/testingInfo/testingInfoOperations';
import { getTestId } from 'redux/testingInfo/testingInfoSelectors';

export const TestingPageComponent = () => {
  const testId = useAppSelector(getTestId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (testId) return;
    dispatch(getRandomTest());
  }, []);

  return <TestQuestion />;
};
