import api from './api';

export class TaskApi {
  static async getTasksByFlow({ flowId }) {
    const endpoint = `flows/${flowId}/tasks`;
    const response = await api.get(endpoint);
    return response.data;
    // const endpoint = `flows/${flowId}/tasks`;
    // console.log(endpoint);
    // const response = await api.get(endpoint);
    // console.log(response);
    // return response.data;
  }

  static async create({ flowId, taskDto }) {
    const endpoint = `flows/${flowId}/tasks`;

    const response = await api.post(endpoint, taskDto);
    return response.data;
  }

  static async update({ flowId, taskDto }) {
    try {
      const endpoint = `flows/${flowId}/tasks/${taskDto.id}`;
      const response = await api.patch(endpoint, taskDto);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async delete({ flowId, taskId }) {
    try {
      const endpoint = `flows/${flowId}/tasks/${taskId}`;
      const response = await api.delete(endpoint);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
