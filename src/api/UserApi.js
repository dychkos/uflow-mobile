import api from './api';

export class UserApi {
  static async getMe() {
    const endpoint = 'users/me';
    const response = await api.get(endpoint);

    return response.data;
  }
}
