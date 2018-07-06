import quotesList from "./../assets/quotes.json";
import { dateToString } from "./helpers";

const { quotes } = quotesList;

const themes = [
  {
    text: "#ddd",
    background: "#111"
  },
  {
    text: "#7fdbff",
    background: "#001f3f"
  },
  {
    background: "#001f3f",
    text: "#ddd"
  },
  {
    text: "#001f3f",
    background: "#FFDC00"
  },
  {
    background: "#ddd",
    text: "#001f3f"
  },
  {
    background: "#fff",
    text: "#001F3F"
  }
];

export const initialState = {
  quotes,
  themes,
  theme: 1,
  todaySelected: true,
  otherDate: null,
  today: dateToString(new Date())
};

export const SET_TODAY = "SET_TODAY";
export const SET_OTHER_DATE = "SET_OTHER_DATE";
export const SET_NEW_THEME = "SET_NEW_THEME";
export const SET_DAY = "SET_DAY";
export const UPDATE_NEW_QUOTE = "UPDATE_NEW_QUOTE";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODAY:
      return { ...state, todaySelected: true, otherDate: null };
    case SET_OTHER_DATE:
      return { ...state, todaySelected: false, otherDate: action.otherDate };
    case SET_NEW_THEME:
      return { ...state, theme: action.index };
    case SET_DAY:
      const today = dateToString(action.date || new Date());
      return { ...state, today };
    case UPDATE_NEW_QUOTE:
      return {
        ...state,
        today: dateToString(new Date()),
        todaySelected: true,
        otherDate: null
      };
    default:
      return state;
  }
}

export function setToday() {
  return {
    type: SET_TODAY
  };
}

export function setDay(date) {
  return {
    type: SET_DAY
  };
}

export function setOtherDate(otherDate) {
  return {
    type: SET_OTHER_DATE,
    otherDate
  };
}

export function updateNewQuote() {
  return {
    type: UPDATE_NEW_QUOTE
  };
}

export function setNewTheme(index) {
  if (Number.isNaN(index)) return;
  return {
    type: SET_NEW_THEME,
    index
  };
}
