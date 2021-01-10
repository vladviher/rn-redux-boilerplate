import {
  INIT_APP,
  SIGN_IN,
  SIGN_OUT,
  GET_CAT_BY_ID,
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

export const getCatById = id => ({
  type: GET_CAT_BY_ID,
  url: `/images/${id}`,
});
