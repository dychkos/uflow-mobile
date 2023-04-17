import api from './api';

export class AuthApi {
  static async login({ email, password }) {
    const endpoint = 'auth/sign-in';
    try {
      const response = await api.post(endpoint, JSON.stringify({ email, password }));
      const { data } = response;
      return data;
    } catch (e) {
      return null;
    }
  }

  static async verifyAuth({ token }) {
    const endpoint = 'auth/verify';

    try {
      const response = await api.post(endpoint, JSON.stringify({ token }));
      return !!response.data;
    } catch (e) {
      return null;
    }
  }
}
