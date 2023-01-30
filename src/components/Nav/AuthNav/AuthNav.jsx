import scss from "./auth-nav.module.scss";
import { NavLink } from "react-router-dom";

const AuthNav = () => {

    return (
        <>
        <NavLink to={'login'} className={scss.login}>Login</NavLink>
        <NavLink to={'register'} className={scss.register}>Registration</NavLink>
        </>
    )
}

export default AuthNav;

