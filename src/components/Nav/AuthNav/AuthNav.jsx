import sccs from "./auth-nav.module.scss";
import { NavLink } from "react-router-dom";

const AuthNav = () => {

    return (
        <>
        <NavLink to={'login'}>Login</NavLink>
        <NavLink to={'register'}>Registration</NavLink>
        </>
    )
}

export default AuthNav;

