import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from './redux/operations';
import { getLoadingUserStatus, isLogin } from 'redux/selectors';

import UserRoutes from './UserRoutes';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const isLoadindUser = useSelector(getLoadingUserStatus);
  // const login = useSelector(isLogin);

  useEffect(() => {
    if (token) {
      dispatch(operations.current());
    }
  }, [token, dispatch]);

  return <>{isLoadindUser ? <p>Loading...</p> : <UserRoutes />}</>;
};
