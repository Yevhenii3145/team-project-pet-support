import { NavLink } from "react-router-dom";
import scss from "./nav.module.scss";
import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";


const Nav = () => {

    return (
        <>
        <NavLink to={'news'}>News</NavLink>
        <NavLink to={'notices'}>Find pet</NavLink>
        <NavLink to={'friends'}>Our friends</NavLink>
        {/* для неавторизованого */}
        <AuthNav/> 
        {/* для авторизованого */}
        <UserNav/>
        </>
    )
}

export default Nav;