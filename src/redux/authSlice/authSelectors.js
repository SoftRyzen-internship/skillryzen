export const getUserEmail = (state) => state.auth.user.email;
export const getUserRole = (state) => state.auth.user.role;
export const getStep = (state) => state.auth.step;
export const getCompanyName = (state) => state.auth.company.companyName;
export const getUserName = (state) => state.auth.user.displayName;
export const getIsAuth = (state) => state.auth.isAuth;
export const getInvitationToken = (state) =>
  state.auth.user.registrationInvitationToken;
