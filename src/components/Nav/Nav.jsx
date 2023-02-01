import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import scss from "./nav.module.scss";
import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";
import { setMenuActive } from "redux/menuSlice";

const Nav = () => {

    const isActive = useSelector(state=>state.menu.menuActive)
    // const isLogin = useSelector(state=>state.auth.isLogin)
    const dispatch = useDispatch();

    return (
        <>
        <div className={isActive === false ? scss.wrapper : `${scss.wrapper} ${scss.isActive}`}>
        <div className={scss.authWrapper}>
        {/* {isLogin ? <UserNav/> : <AuthNav/>} */}
        <AuthNav/> 
        {/* <UserNav/> */}
        </div>
        <div className={scss.linkWrapper}>
        <NavLink to={'news'} className={scss.linkMain} onClick={()=>dispatch(setMenuActive(!isActive))}>News</NavLink>
        <NavLink to={'notices'} className={scss.linkMain} onClick={()=>dispatch(setMenuActive(!isActive))}>Find pet</NavLink>
        <NavLink to={'friends'} className={scss.linkMain} onClick={()=>dispatch(setMenuActive(!isActive))}>Our friends</NavLink>
        </div>
        </div>
        </>
    )
}

export default Nav;