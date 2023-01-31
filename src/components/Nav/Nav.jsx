import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import scss from "./nav.module.scss";
import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";


const Nav = () => {

    const isActive = useSelector(state=>state.menu.menuActive);

    return (
        <>
        <div className={isActive === false ? scss.wrapper : `${scss.wrapper} ${scss.isActive}`}>
        <div className={scss.authWrapper}>
                {/* для неавторизованого */}
        <AuthNav/> 
        {/* для авторизованого */}
        <UserNav/>
        </div>
        <div className={scss.linkWrapper}>
        <NavLink to={'news'} className={scss.linkMain}>News</NavLink>
        <NavLink to={'notices'} className={scss.linkMain}>Find pet</NavLink>
        <NavLink to={'friends'} className={scss.linkMain}>Our friends</NavLink>
        </div>
        </div>
        </>
    )
}

export default Nav;