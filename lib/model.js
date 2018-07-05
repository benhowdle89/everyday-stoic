import getDayOfYear from "date-fns/get_day_of_year";
import quotesList from "./../assets/quotes.json";

const { quotes } = quotesList;

const findQuoteByDay = day => {
  return quotes[day];
};

export default day => findQuoteByDay(day || getDayOfYear(new Date()));
