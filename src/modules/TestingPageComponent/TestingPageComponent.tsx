import { useEffect } from 'react';

import { TestQuestion } from './TestQuestion/TestQuestion';
import { getLoginApi } from 'services/axiosConfig';
import { useAppDispatch } from 'hooks/hook';
import { getRandomTest } from 'redux/testingInfo/testingInfoOperations';

export const TestingPageComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getLoginApi()
      .then((response) => dispatch(getRandomTest()))
      .catch((error) => console.log(error));
  }, []);

  return <TestQuestion />;
};
