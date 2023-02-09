export const isLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getPets = ({ user}) => user.pets;
export const getLoading = ({auth}) => auth.loading;
export const getLoadingUserStatus = ({ auth }) => auth.isLoadingUser;
// export const getUserId = ({ auth }) => auth.userId;