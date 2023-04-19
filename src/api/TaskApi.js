import api from './api';

export class TaskApi {
  static async getTasksByFlow({ flowId }) {
    try {
      const endpoint = `flows/${flowId}/tasks`;
      console.log(endpoint);
      const response = await api.get(endpoint);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
    // const endpoint = `flows/${flowId}/tasks`;
    // console.log(endpoint);
    // const response = await api.get(endpoint);
    // console.log(response);
    // return response.data;
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
