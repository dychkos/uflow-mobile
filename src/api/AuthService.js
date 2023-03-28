import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export class AuthService {
  static async login({ email, password }) {
    const url = `${API_BASE_URL}/auth/sign-in`;
    console.log('...accessing to', url);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      console.log('res data', data);
      await AuthService.storeToken(data.access_token);
      await AsyncStorage.setItem('@logged_in', 'true');
    } catch (e) {
      throw new Error(e);
    }
  }

  static register(dto) {}

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

  static async checkLoggedIn() {
    const loggedIn = await AuthService.isLoggedIn();
    if (!loggedIn) {
      return false;
    } else {
      const { token } = await AuthService.retrieveToken();
      // make API call to verify JWT token
      const url = `${API_BASE_URL}/auth/verify`;
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ token }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        // navigate to home screen
        return true;
      } else {
        // remove JWT token and navigate to login screen
        await AuthService.removeToken();
        await AsyncStorage.removeItem('@logged_in');
        return false;
      }
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
