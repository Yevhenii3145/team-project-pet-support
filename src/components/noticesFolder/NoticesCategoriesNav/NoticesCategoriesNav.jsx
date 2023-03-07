import { NavLink, useSearchParams} from 'react-router-dom';
import scss from './notices-categories-nav.module.scss';
import useAuth from 'redux/utils/useAuth';

const NoticesCategoriesNav = () => {
  const isLogin = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');

  const getClassName = ({ isActive }) => {
    return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
  };

  return (
    <ul className={scss.list}>
      <li className={scss.item}>
        <NavLink to={`/notices/lost-found?page=1&limit=8`} className={getClassName}>
          lost/found
        </NavLink>
      </li>
      <li className={scss.item}>
        <NavLink to={`/notices/for-free?page=1&limit=8`} className={getClassName}>
          in good hands
        </NavLink>
      </li>
      <li className={scss.item_order}>
        <NavLink to={`/notices/sell?page=${page}&limit=8`} className={getClassName}>
          sell
        </NavLink>
      </li>
      {isLogin && (
        <>
          <li className={scss.item}>
            <NavLink to={`/notices/favorite?page=1&limit=8`} className={getClassName}>
              favorite ads
            </NavLink>
          </li>
          <li className={scss.item}>
            <NavLink to={`/notices/own?page=1&limit=8`} className={getClassName}>
              my ads
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NoticesCategoriesNav;
