import axios from 'axios';

import { Answer, Finish } from 'redux/testingInfo/testingInfoOperations';

export const axiosInstance = axios.create({
  baseURL: 'https://skillryzen-be-dev.herokuapp.com/',
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== 'auth/auth' && err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    await axiosInstance({
                        ...originalConfig,
                        method: 'get',
                        url: 'auth/refresh',
                    });
                    return axiosInstance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
);

export const getLoginApi = () =>
  axiosInstance.post(
    'auth/login',
    { email: 'student511@blabla.com', password: 'secret123' }
  );

export const getRandomTestApi = () =>
  axiosInstance
    .post('user-test/random', {}, { withCredentials: true })
    .then((response) => response.data);

export const answerTestApi = ({ testId, questionId, selectedAnswer }: Answer) =>
  axiosInstance
    .post(
      `user-test/${testId}/answer-question/by-label`,
      { questionId: questionId, labels: [selectedAnswer] }
    )
    .then((response) => response.data);

export const finishTestApi = ({ testId, time }: Finish) =>
  axiosInstance
    .post(
      `user-test/${testId}/finish`,
      { finishedAt: time }
    )
    .then((response) => response.data);
