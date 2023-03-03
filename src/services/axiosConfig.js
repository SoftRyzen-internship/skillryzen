import axios from 'axios';

axios.defaults.baseURL = 'https://skillryzen-be-dev.herokuapp.com/';

export const loginUser = () =>
  axios.post(
    'auth/login',
    { email: 'student511@blabla.com', password: 'secret123' },
    { withCredentials: true }
  );

export const getRandomTest = () =>
  axios
    .post('user-test/random', {}, { withCredentials: true })
    .then((response) => response.data);

export const answerQuestion = ({ testId, questionId, selectedAnswer }) =>
  axios
    .post(
      `user-test/${testId}/answer-question/by-label`,
      { questionId: questionId, labels: [selectedAnswer] },
      { withCredentials: true }
    )
    .then((response) => response.data);