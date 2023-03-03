import axios from 'axios';

import { Answer, Finish } from 'redux/testingInfo/testingInfoOperations';

axios.defaults.baseURL = 'https://skillryzen-be-dev.herokuapp.com/';


export const getLoginApi = () =>
  axios.post(
    'auth/login',
    { email: 'student511@blabla.com', password: 'secret123' },
    { withCredentials: true }
  );

export const getRandomTestApi = ()  =>
  axios
    .post('user-test/random', {}, { withCredentials: true })
    .then((response) => response.data);

export const answerTestApi = ({testId, questionId, selectedAnswer}: Answer) =>
  axios
    .post(
      `user-test/${testId}/answer-question/by-label`,
      { questionId: questionId, labels: [selectedAnswer] },
      { withCredentials: true }
    )
    .then((response) => response.data);

export const finishTestApi = ({ testId, time }: Finish) =>
  axios
    .post(
      `user-test/${testId}/finish`,
      { finishedAt: time },
      { withCredentials: true }
    )
    .then((response) => response.data);
