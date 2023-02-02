import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './redux/auth/auth-operation';
import { getLoadingUserStatus } from 'redux/auth/auth-selectors';


import UserRoutes from "./UserRoutes";

// const a = 1;

export const App = () => {
  const dispatch = useDispatch()

  const isLoadindUser = useSelector(getLoadingUserStatus)

  useEffect(() => {
    dispatch(current())
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



