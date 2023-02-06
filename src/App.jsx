import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { current } from './redux/auth/auth-operation';
import operations from './redux/operations';
import { getLoadingUserStatus } from 'redux/selectors';


import UserRoutes from "./UserRoutes";

// const a = 1;

export const App = () => {
  const dispatch = useDispatch()

  const isLoadindUser = useSelector(getLoadingUserStatus)

  useEffect(() => {
    dispatch(operations.current())
  }, [dispatch])

  return (
    <>
      {isLoadindUser ?
        <p>Loading...</p> :
        <UserRoutes />
      }
    </>
  );
};



