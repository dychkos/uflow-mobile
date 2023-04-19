import { TaskApi } from '../api/TaskApi';

export class TaskService {
  async getTasks({ flowId }) {
    const data = await TaskApi.getTasksByFlow({ flowId });
    console.log('data', data);

    if (data) {
      await AuthService.makeAuth(data.access_token);
    }
  }
}
