import getDayOfYear from "date-fns/get_day_of_year";

const getCurrentQuote = (state, day) => {
  const index = getDayOfYear(!day ? new Date() : new Date(day));
  return state.quotes[index];
};

export const getCurrentTheme = (state, theme) => state.themes[theme];

export default getCurrentQuote;
