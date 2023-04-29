import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';
import { useUser } from '../store/useUser';

// const setAuth = useUser((state) => state.setAuth);

const axiosInstance = axios.create({
  // baseURL: API_BASE_URL,
  baseURL: 'https://ae49-31-144-229-120.ngrok-free.app',
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem('@jwt_token')}`
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error.message);
    if (error.response && error.response.data) {
      console.log(error.response.data);
      if (error.response.status === 401) {
        await AsyncStorage.removeItem('@logged_in');
        await AsyncStorage.removeItem('@jwt_token');

        useUser.getState().setAuth(false);
      }

      const resData = error.response.data;
      return Promise.reject(new Error(resData.message));
    }
    return Promise.reject(new Error(error.message));
  }
);

axiosInstance.interceptors.request.use(
  async function (config) {
    // update the access token in the headers
    const token = await AsyncStorage.getItem('@jwt_token');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
