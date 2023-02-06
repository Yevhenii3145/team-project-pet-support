import scss from "./auth-nav.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from "redux/menuSlice";
import GoogleAuth from "../GoogleNav/GoogleNav";

const AuthNav = () => {

    const isActive = useSelector(state=>state.menu.menuActive)
    const dispatch = useDispatch();

    return (
        <>
        {isActive === true ? <NavLink to={'login'} className={scss.login} onClick={()=>dispatch(setMenuActive(!isActive))}>Login</NavLink> : <NavLink to={'login'} className={scss.login}>Login</NavLink>}
        {isActive === true ? <NavLink to={'register'} className={scss.register} onClick={()=>dispatch(setMenuActive(!isActive))}>Registration</NavLink> : <NavLink to={'register'} className={scss.register}>Registration</NavLink>}
        <GoogleAuth/>
        </>
    )
}

export default AuthNav;

