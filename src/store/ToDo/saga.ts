import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "./types";
import * as actions from "./actions";
import * as api from "./apis";

function* getToDo() {
  try {
    //@ts-ignore
    const response = yield call(api.getToDo);
    yield put(actions.getToDoResponse(response?.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* toDoSaga() {
  yield takeEvery(types.GET_TODO_REQUEST, getToDo);
}
