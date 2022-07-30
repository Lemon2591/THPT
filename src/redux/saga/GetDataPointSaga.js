import { call, put, takeEvery, select } from "redux-saga/effects";
import { getDataPoint } from "../action/ActionGetApi";
import ApiPoint from "../service/ApiThpt";

export function* sagaFormData() {
  try {
    const data = yield call(() => ApiPoint());
    yield put(getDataPoint(data.data.lst_suggestions));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSendDataFrom() {
  yield takeEvery("ON_GET_DATA", sagaFormData);
}
