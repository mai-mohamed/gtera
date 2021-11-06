import * as types from "./types";

const INITIAL_STATE = {
  lang: localStorage.getItem("lang") || "en",
};

type IAction = { type: "SET_CURRENT_LANG" | "GET_CURRENT_LANG"; lang: string };

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case types.SET_CURRENT_LANG:
      return { ...state, lang: action.lang };
    case types.GET_CURRENT_LANG:
      return state;
    default:
      return state;
  }
};
