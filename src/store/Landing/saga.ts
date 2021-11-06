import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "./types";

function* submitContactSaga({ payload }: any) {
  try {
    //   const response = yield call(api.submitContact, payload);
  } catch (error) {
    console.log(error);
  }
}

export default function* landingSaga() {
  yield takeEvery(types.SUBMIT_CONTACT_REQUEST, submitContactSaga);
}
