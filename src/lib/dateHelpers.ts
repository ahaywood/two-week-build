export const currentMonth = new Date().getMonth();
export const currentDay = new Date().getDate();
export const currentYear = new Date().getFullYear();

export const getCurrentMonthWithZeros = () => {
  const month = currentMonth + 1;
  return month < 10 ? `0${month}` : month;
};

export const getDateArray = (date: string) => {
  const dateOnly = date.split(" "); // break up the date and time
  const dateArray = dateOnly[0].split("-");
  return [dateArray[2], dateArray[1], dateArray[0]];
};

export const getMonthName = (month: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[parseInt(month) - 1];
};

export const getFullMonthName = (month: number) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "October",
    "November",
    "December",
  ];
  return months[month - 1];
}
