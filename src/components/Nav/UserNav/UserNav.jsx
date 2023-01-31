import scss from "./user-nav.module.scss";
import { NavLink } from "react-router-dom";
import SvgInsert from "components/Svg/Svg";

const UserNav = () => {

    return (
        <NavLink to={'user'} className={scss.account}>
        <SvgInsert id="icon-account"/>
            Account</NavLink>
    )
}

export default UserNav;