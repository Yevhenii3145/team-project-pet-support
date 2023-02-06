import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from './redux/operations';
import { getLoadingUserStatus } from 'redux/selectors';


import UserRoutes from "./UserRoutes";

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



