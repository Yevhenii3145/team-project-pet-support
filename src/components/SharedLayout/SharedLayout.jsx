import scss from './shared-layout.module.scss';
import base from '../../helpers/container.module.scss';
import love from '../../images/heart-desktop.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SharedLayout = () => {
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(document.location.search);
  const usertoken = searchParams.get('usertoken');

  useEffect(() => {
    if (!token) {
      navigate('notices/sell');
    }
    if (usertoken) {
      window.localStorage.setItem('token', usertoken);
      document.location.reload();
      navigate('user');
    }
  }, [token, navigate, usertoken]);

  return (
    <>
      <div className={scss.background}>
        <div className={base.container}>
          <div className={scss.wrapperHome}>
            <h1 className={scss.title}>Take good care of your small pets</h1>
            <div className={scss.image}>
              <img src={love} alt="heart" className={scss.heartIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
