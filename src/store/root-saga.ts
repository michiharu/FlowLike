/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { delay } from 'redux-saga/effects';

export function* rootSaga() {
  yield delay(1);
}
