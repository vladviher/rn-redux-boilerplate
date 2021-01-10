import { fork } from 'redux-saga/effects';

import commonRequset from './commonRequset';

export default function* root() {
  yield fork(commonRequset);
  // rest sagas
}
