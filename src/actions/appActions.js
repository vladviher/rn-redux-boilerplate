import {
  INIT_APP,
  SIGN_IN,
  SIGN_OUT,
} from './../store/actionsTypes';

export const initApp = () => ({
  type: INIT_APP,
});

export const signIn = payload => ({
  type: SIGN_IN,
  payload,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
