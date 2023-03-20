import { NavLink} from 'react-router-dom';
import scss from './notices-categories-nav.module.scss';
import useAuth from 'redux/utils/useAuth';
import AddNoticeButton from '../AddNoticeButton/AddNoticeButton';

const NoticesCategoriesNav = () => {
  const isLogin = useAuth();

  const getClassName = ({ isActive }) => {
    return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
  };

  return (
    <div className={scss.wrapper}>
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
      <AddNoticeButton/>
    </div>
  );
};

export default NoticesCategoriesNav;
