import api from './api';

export class FlowApi {
  static async getAll() {
    const endpoint = `flows/`;

    const response = await api.get(endpoint);
    return response.data;
  }

  static async create(flowDto) {
    const endpoint = `flows/`;

    const response = await api.post(endpoint, flowDto);
    return response.data;
  }

  static async update(flowDto) {
    const endpoint = `flows/${flowDto.id}/`;
    const response = await api.patch(endpoint, flowDto);
    return response.data;
  }

  // static async delete({ flowId, taskId }) {
  //   try {
  //     const endpoint = `flows/${flowId}/tasks/${taskId}`;
  //     const response = await api.delete(endpoint);
  //     return response.data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}
