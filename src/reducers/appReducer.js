import injectReducer from './../store/injectReducer';
import initialState from './../store/initialState';
import {
  INIT_APP,
  SIGN_IN,
  SIGN_OUT,
} from './../store/actionsTypes';

export default injectReducer(initialState.appReducer, {
  [INIT_APP]: state => ({
    ...state,
    isAppLoaded: true,
  }),
  [SIGN_IN]: (state, { payload }) => ({
    ...state,
    isSignedIn: true,
    userName: payload.user || 'guest',
  }),
  [SIGN_OUT]: state => ({
    ...state,
    isSignedIn: false,
    userName: null,
  }),
});
