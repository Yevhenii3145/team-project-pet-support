import { NavLink, useNavigate, useParams} from 'react-router-dom';
import scss from './notices-categories-nav.module.scss';
import useAuth from 'redux/utils/useAuth';
import { useEffect } from 'react';

const NoticesCategoriesNav = () => {
  const isLogin = useAuth();
  const {categoryName} = useParams()
  const navigate = useNavigate()

  useEffect(()=> {
    if(categoryName === undefined) {
      navigate('sell', { replace: true });
    }
  }, [categoryName, navigate])

  const getClassName = ({ isActive }) => {
    return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
  };

  return (
    <ul className={scss.list}>
      <li className={scss.item}>
        <NavLink to='/notices/lost-found' className={getClassName}>
          lost/found
        </NavLink>
      </li>
      <li className={scss.item}>
        <NavLink to='/notices/for-free' className={getClassName}>
          in good hands
        </NavLink>
      </li>
      <li className={scss.item_order}>
        <NavLink to='/notices/sell' className={getClassName}>
          sell
        </NavLink>
      </li>
      {isLogin && (
        <>
          <li className={scss.item}>
            <NavLink to='/notices/favorite' className={getClassName}>
              favorite ads
            </NavLink>
          </li>
          <li className={scss.item}>
            <NavLink to='/notices/own' className={getClassName}>
              my ads
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NoticesCategoriesNav;
