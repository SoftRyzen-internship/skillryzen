import { useEffect } from 'react';

import { TestQuestion } from './TestQuestion/TestQuestion';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import {
  finishTest,
  getTestTemplate,
} from 'redux/testingInfo/testingInfoOperations';
import {
  getQuestionId,
  getResultTime,
} from 'redux/testingInfo/testingInfoSelectors';

export const TestingPageComponent = () => {
  const time = useAppSelector(getResultTime);
  const questionId = useAppSelector(getQuestionId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (questionId) return;
    dispatch(getTestTemplate());
    // eslint-disable-next-line

    return () => {
      if (time) return;
      dispatch(finishTest());
    };
  }, []);

  return <TestQuestion />;
};
