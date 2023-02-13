import scss from './shared-layout.module.scss';
import base from '../../helpers/container.module.scss';
import love from '../../images/heart-desktop.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SharedLayout = () => {
  const token = useSelector(state => state.auth.token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('notices/sell');
    }
  }, [token, navigate]);

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
