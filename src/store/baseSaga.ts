import { all } from "redux-saga/effects";
import landingSaga from "./Landing/saga";

export default function* baseSaga() {
  yield all([landingSaga()]);
}
