import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://skillryzen-be-dev.herokuapp.com/',
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  res => res,
  async err => {
    const originalConfig = err.config;
    if (originalConfig.url !== 'auth/auth' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          await axiosInstance({
            ...originalConfig,
            method: 'post',
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
