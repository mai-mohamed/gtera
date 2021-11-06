import * as types from "./types";

export const setCurrentLang = (lang: string) => {
  localStorage.setItem("lang", lang);
  return { type: types.SET_CURRENT_LANG, lang: lang };
};

export const getCurrentLang = () => {
  return { type: types.GET_CURRENT_LANG };
};
