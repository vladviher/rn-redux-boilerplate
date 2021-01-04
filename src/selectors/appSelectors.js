export const selectIsAppLoaded = state => state.appReducer.isAppLoaded;
export const selectIsUserSigned = state => state.appReducer.isSignedIn;
export const selectUserName = state => state.appReducer.userName;
