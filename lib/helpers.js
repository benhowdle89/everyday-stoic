import format from "date-fns/format";

const dateToString = dateObj => format(dateObj, "MM/DD/YYYY");
const isDifferentDays = (date1, date2) =>
  dateToString(date1) !== dateToString(date2);

export { dateToString, isDifferentDays };
