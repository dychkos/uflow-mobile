export class Helper {
  static formatTaskDays(dayToFormat) {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    return days.filter((_, idx) => dayToFormat.includes(idx + 1));
  }

  static prepareTaskToDto(task) {
    const taskDto = { ...task };

    if ('how_many' in task) {
      taskDto.how_many = parseInt(task.how_many);
    }

    return taskDto;
  }

  static isValidInteger(str) {
    return /^([1-9]\d*|0)$/.test(str);
  }
}
