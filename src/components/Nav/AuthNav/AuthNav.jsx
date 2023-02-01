import scss from "./auth-nav.module.scss";
import button from "../../../helpers/buttons.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from "redux/menuSlice";

const AuthNav = () => {

    const isActive = useSelector(state=>state.menu.menuActive)
    const dispatch = useDispatch();

    return (
        <>
        <NavLink to={'login'} className={scss.login} onClick={()=>dispatch(setMenuActive(!isActive))}>Login</NavLink>
        <NavLink to={'register'} className={scss.register} onClick={()=>dispatch(setMenuActive(!isActive))}>Registration</NavLink>
        </>
    )
}

export default AuthNav;

