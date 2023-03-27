import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const client = axios.create();
client.defaults.timeout = 1000;
client.defaults.baseURL = 'http://localhost:5000';

const requestSuccess = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('isAuthenticated');
  if (config && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const requestError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const responseSuccess = (response: AxiosResponse) => response;
const responseError = async (error: AxiosError) => {
  //TODO ADD NOTIFICATION || DIALOG AFTER
  switch (error?.response?.status) {
    case 500:
      console.log('500');
      break;
    case 400:
      console.log('400');
      break;
    case 404:
      console.log('404');
      break;
    default:
      console.log('err');
  }
};

client.interceptors.request.use(requestSuccess, requestError);
client.interceptors.response.use(responseSuccess, responseError);

export default client;
