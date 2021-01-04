import { createStore, compose } from 'redux';

import reducer from '../reducers';
import middleware, { sagaLauncher } from '../middleware';
import initialState from './initialState';

const store = compose(middleware)(createStore)(reducer, initialState);
sagaLauncher();

export default store;
