export const isLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getPets = ({ users }) => users.pets;
export const getLoading = ({auth}) => auth.loading;
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;