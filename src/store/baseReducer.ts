import { combineReducers } from "redux";
import lang from "./Lang/reducer";
import todo from "./ToDo/reducer";

export default combineReducers({
  lang,
  todo,
});
