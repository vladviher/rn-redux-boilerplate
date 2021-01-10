import { takeEvery, put } from 'redux-saga/effects';

import * as actionTypes from '../store/actionsTypes';
import { baseApi, baseeApiErrorHandler, getErrorMessage } from '../helpers/api';

const IGNORED_ACTION_TYPES = [

];

function* requestHandler(action) {
  try {
    const {
      type,
      url,
      method = 'GET',
      headers = {},
      payload,
      ...rest
    } = action;

    yield put({ type: `${type}${actionTypes._REQUEST}` });

    const response = yield baseApi.any({
      url,
      method,
      data: payload,
      headers,
    });

    if (!response || !response.ok) {
      throw new Error(response || 'unknown issue');
    }

    yield put({
      ...rest,
      type: `${type}${actionTypes._SUCCESS}`,
      payload: response.data,
    });
  } catch (error) {
    baseeApiErrorHandler(error);
    yield put({
      type: `${action.type}${actionTypes._FAILURE}`,
      errorMessage: getErrorMessage(error),
    });
  }
}

function pattern(action) {
  if (action.type && action.url && !IGNORED_ACTION_TYPES.includes(action.type)) {
    return true;
  }

  return false;
}

export default function* commonRequest() {
  yield takeEvery(pattern, requestHandler);
}
