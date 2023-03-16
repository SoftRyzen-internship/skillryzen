export const getUserEmail = state => state.auth.user.email;
export const getUserRole = state => state.auth.user.role;
export const getUserName = state => state.auth.user.displayName;
export const getInvitationToken = state =>
  state.auth.user.registrationInvitationToken;

export const getCompanyName = state => state.auth.company.companyName;

export const getStep = state => state.auth.step;
export const getIsAuth = state => state.auth.isAuth;
export const getIsClickLogOut = state => state.auth.isClickLogOut;
