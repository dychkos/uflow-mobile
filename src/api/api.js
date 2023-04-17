import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';
import { useUser } from '../store/useUser';

// const setAuth = useUser((state) => state.setAuth);

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem('token')}`
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      await AsyncStorage.removeItem('@logged_in');
      await AsyncStorage.removeItem('@jwt_token');

      useUser.getState().setAuth(false);
      // setAuth(false);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
