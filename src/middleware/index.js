import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
export const sagaLauncher = () => sagaMiddleware.run(rootSaga);

const middlewareList = [
  sagaMiddleware,
  __DEV__ && logger,
].filter(Boolean);

export default applyMiddleware(...middlewareList);
