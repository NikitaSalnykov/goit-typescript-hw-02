/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum daysOfWeek {
  Monday = "workday",
  Tuesday = "workday",
  Wednesday = "workday",
  Thursday = "workday",
  Friday = "workday",
  Saturday = "weekend",
  Sunday = "weekend"
}

function isWeekend(days: daysOfWeek): boolean {
  return days === "weekend";
}

// console.log(isWeekend(daysOfWeek.Sunday))

