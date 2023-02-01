import { Link } from "react-router-dom";
import scss from "./notices-categories-nav.module.scss";

const NoticesCategoriesNav = () => {

    return (
        <ul className={scss.list}>
            <li className={scss.item}>
                <Link to="lost-found" className={scss.link}>lost/found</Link>
            </li>
            <li className={scss.item}>
                <Link to="for-free" className={scss.link}>in good hands</Link>
            </li>
            <li className={scss.item_order}>
                <Link to="sell" className={scss.link}>sell</Link>          
            </li>
        </ul>
  )
}

export default NoticesCategoriesNav;