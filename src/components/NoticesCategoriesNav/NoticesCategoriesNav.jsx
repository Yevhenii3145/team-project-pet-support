import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import scss from "./notices-categories-nav.module.scss";
import { isLogin } from "redux/auth/auth-selectors";

const NoticesCategoriesNav = () => {

    const isAuth = useSelector(isLogin);

    const getClassName = ({ isActive }) => {
        return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
    }

    return (
        <ul className={scss.list}>
            <li className={scss.item}>
                <NavLink to="/notices/lost-found" className={getClassName} >lost/found</NavLink>
            </li>
            <li className={scss.item}>
                <NavLink to="/notices/for-free" className={getClassName} >in good hands</NavLink>
            </li>
            <li className={scss.item_order}>
                <NavLink to="/notices/sell" className={getClassName} >sell</NavLink>          
            </li>
            {isAuth && 
                <>
                    <li className={scss.item}>
                        <NavLink to="/notices/favorite" className={getClassName} >favorite ads</NavLink>
                    </li>
                    <li className={scss.item}>
                        <NavLink to="/notices/own" className={getClassName} >my ads</NavLink>
                    </li>
                </>
            }
        </ul>
  )
}

export default NoticesCategoriesNav;