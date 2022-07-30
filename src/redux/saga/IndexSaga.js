import { all } from "redux-saga/effects";
import { watchSendDataFrom } from "./GetDataPointSaga";

export default function* rootSaga() {
  yield all([watchSendDataFrom()]);
}
