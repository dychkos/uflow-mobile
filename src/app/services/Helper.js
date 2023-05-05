import { DAYS_ISO } from '../enums';

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

  static getCurrentDayIndex() {
    const today = new Date();
    let dayIndex = today.getDay(); // Sunday is 0, Monday is 1, etc.

    // Adjust for starting the week on Monday as 1 and ending on Sunday as 7
    if (dayIndex === 0) {
      dayIndex = 7;
    }

    return dayIndex;
  }

  static filterTaskByCurrentDay(tasks) {
    const currentDay = Helper.getCurrentDayIndex();
    console.log(
      currentDay,
      tasks.filter((task) => task.days.includes(currentDay))
    );
    return tasks.filter((task) => task.days.includes(currentDay));
  }
}
