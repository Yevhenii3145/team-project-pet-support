import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import operations from './redux/operations/userOperations'
import { getLoading } from 'redux/selectors/selectors'
// import CatLoader from './components/utilsFolder/CatLoader/CatLoader'
import UserRoutes from './UserRoutes'
import ScrollToTop from 'components/utilsFolder/ScrollToTop/ScrollToTop';

export const App = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    // const isLoadindUser = useSelector(getLoading)

    useEffect(() => {
        if (token) {
            dispatch(operations.current())
        }
    }, [token, dispatch])

  return (
    <>
      {/* {isLoadindUser ? <CatLoader /> : <UserRoutes />} */}
<UserRoutes />
      <ScrollToTop />
    </>
  )
};