import api from './api';

export class AuthApi {
  static async login({ email, password }) {
    const endpoint = 'auth/sign-in';
    const response = await api.post(endpoint, { email, password });

    return response.data;
  }

  static async register({ username, email, password }) {
    const endpoint = 'auth/sign-up';

    const response = await api.post(endpoint, { username, email, password });
    return response.data;
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
