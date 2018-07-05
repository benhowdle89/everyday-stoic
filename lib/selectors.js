import getDayOfYear from "date-fns/get_day_of_year";

const getCurrentQuote = (state, day = getDayOfYear(new Date())) => {
  return state.quotes[day];
};

export const getCurrentTheme = (state, theme) => state.themes[theme];

export default getCurrentQuote;
