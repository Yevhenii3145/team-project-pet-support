import { NavLink } from "react-router-dom";
import scss from "./notices-categories-nav.module.scss";

const NoticesCategoriesNav = () => {

    const getClassName = ({ isActive }) => {
    return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
}

    return (
        <ul className={scss.list}>
            <li className={scss.item}>
                <NavLink to="/notices/lost-found" className={getClassName}>lost/found</NavLink>
            </li>
            <li className={scss.item}>
                <NavLink to="/notices/for-free" className={getClassName}>in good hands</NavLink>
            </li>
            <li className={scss.item_order}>
                <NavLink to="/notices/sell" className={getClassName}>sell</NavLink>          
            </li>
        </ul>
  )
}

export default NoticesCategoriesNav;