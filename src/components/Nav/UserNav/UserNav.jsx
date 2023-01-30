import scss from "./user-nav.module.scss";
import { NavLink } from "react-router-dom";

const UserNav = () => {

    return (
        <NavLink to={'user'}>Account</NavLink>
    )
}

export default UserNav;