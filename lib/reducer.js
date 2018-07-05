import quotesList from "./../assets/quotes.json";

const { quotes } = quotesList;

const themes = [
  {
    text: "#7fdbff",
    background: "#001f3f"
  }
];

export const initialState = {
  quotes,
  themes,
  theme: 0
};

export const SWITCH_THEME = "SWITCH_THEME";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, theme: theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

export function saveMeta({ id, meta }) {
  return {
    type: SAVE_META,
    id,
    meta
  };
}
