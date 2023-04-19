export class Helper {
  static formatTaskDays(dayToFormat) {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    return days.filter((_, idx) => dayToFormat.includes(idx + 1));
  }
}
