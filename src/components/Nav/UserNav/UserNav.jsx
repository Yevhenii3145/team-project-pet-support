import scss from "./user-nav.module.scss";
import { NavLink } from "react-router-dom";
import SvgInsert from "components/Svg/Svg";
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from "redux/menuSlice";

const UserNav = () => {

    const isActive = useSelector(state=>state.menu.menuActive)
    const dispatch = useDispatch();

    return (
        isActive === true 
            ? <NavLink to={'user'} className={scss.account} onClick={()=>dispatch(setMenuActive(!isActive))}>
            <SvgInsert id="icon-account"/>
                Account</NavLink>
            : <NavLink to={'user'} className={scss.account}>
            <SvgInsert id="icon-account"/>
                Account</NavLink>
        
    )
}

export default UserNav;