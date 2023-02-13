import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Public = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  console.log('isLogin', isLogin);

  if (isLogin) {
    return <Navigate to="/user" />;
  }
  return <Outlet />;
};

export default Public;
