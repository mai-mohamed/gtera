import { all } from "redux-saga/effects";
import landingSaga from "./Landing/saga";
import toDoSaga from "./ToDo/saga";

export default function* baseSaga() {
  yield all([landingSaga(), toDoSaga()]);
}
