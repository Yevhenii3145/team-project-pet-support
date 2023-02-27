import scss from "./user-nav.module.scss";
import { NavLink } from "react-router-dom";
import SvgInsert from "components/utilsFolder/Svg/Svg";
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from "redux/slices/menuSlice";

const UserNav = () => {

    const isActive = useSelector(state => state.menu.menuActive)
    const user = useSelector(state => state.auth.user);
    // console.log('user', user);
    // console.log('isActive', isActive);
    const dispatch = useDispatch();
   

    return (
        isActive === true 
            ? <NavLink to={'user'} className={scss.account} onClick={()=>dispatch(setMenuActive(!isActive))}>
            <SvgInsert id="icon-account"/>
                Account</NavLink>
            : <NavLink to={'user'} className={scss.account}>
            <img  src={user.avatar} className={scss.avatarURL} alt="" />
                {user.name}</NavLink>
        
    )
}

export default UserNav;