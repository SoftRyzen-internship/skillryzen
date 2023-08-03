import { RootState } from 'redux/store';

export const getUserEmail = (state: RootState) => state.auth.user.email;
export const getUserRole = (state: RootState) => state.auth.user.role;
export const getUserName = (state: RootState) => state.auth.user.displayName;
export const getInvitationToken = (state: RootState) =>
  state.auth.user.registrationInvitationToken;

export const getCompanyName = (state: RootState) =>
  state.auth.company.companyName;

export const getStep = (state: RootState) => state.auth.step;
export const getIsAuth = (state: RootState) => state.auth.isAuth;
export const getIsClickLogOut = (state: RootState) => state.auth.isClickLogOut;
