/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = "https://api.github.com/";
const defaultPrefix = ""
export default {
    get: (url, params, prefix) => axiosInstance({
      method: 'get',
      url: `${prefix || defaultPrefix}${url}`,
      params,
    }),
  };
  