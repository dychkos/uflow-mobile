import api from './api';

export class TaskApi {
  static async getTasksByFlow({ flowId }) {
    try {
      const endpoint = `flows/${flowId}/tasks`;
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

  static async create({ flowId, taskDto }) {
    try {
      const endpoint = `flows/${flowId}/tasks`;
      console.log('dto', taskDto);

      const response = await api.post(endpoint, taskDto);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async update({ flowId, taskDto }) {
    try {
      const endpoint = `flows/${flowId}/tasks/${taskDto.id}`;
      const response = await api.patch(endpoint, taskDto);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async delete({ flowId, taskId }) {
    try {
      const endpoint = `flows/${flowId}/tasks/${taskId}`;
      const response = await api.delete(endpoint);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
