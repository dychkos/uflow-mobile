import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import { AuthApi } from '../api/AuthApi';

export class AuthService {
  static async login({ email, password }) {
    const data = await AuthApi.login({ email, password });
    console.log('data', data);

    if (data) {
      await AuthService.makeAuth(data.access_token);
    }
  }

  static async register({ username, email, password }) {
    const data = await AuthApi.register({ username, email, password });
    console.log('data', data);

    if (data) {
      await AuthService.makeAuth(data.access_token);
    }
  }

  static async verifyAuth() {
    const token = await AuthService.retrieveToken();
    const data = await AuthApi.verifyAuth(token);

    if (!data) {
      await AuthService.makeLogout();
    }
  }

  // function to mark user session as Authorized
  static async makeAuth(accessToken) {
    await AuthService.storeToken(accessToken);
    await AsyncStorage.setItem('@logged_in', 'true');
  }

  // function to mark user session as UnAuthorized
  static async makeLogout() {
    await AuthService.removeToken();
    await AsyncStorage.removeItem('@logged_in');
  }

  // function to set JWT token in async storage
  static async storeToken(token) {
    try {
      await AsyncStorage.setItem('@jwt_token', token);
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  // function to retrieve JWT token from async storage
  static async retrieveToken() {
    try {
      const token = await AsyncStorage.getItem('@jwt_token');
      if (token !== null) {
        // decode JWT token to get user info
        const decodedToken = jwt_decode(token);
        return { token, user: decodedToken.user };
      }
    } catch (e) {
      console.log(e);
    }
  }

  // function to remove JWT token from async storage
  static async removeToken() {
    try {
      await AsyncStorage.removeItem('@jwt_token');
    } catch (e) {
      console.log(e);
    }
  }

  // function to check if user is logged in
  static async isLoggedIn() {
    try {
      const token = await AsyncStorage.getItem('@jwt_token');
      if (token !== null) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  }
}
