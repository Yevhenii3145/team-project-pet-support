import { NavLink } from "react-router-dom";
import SvgInsert from "../../Svg/Svg";
import scss from "./google-nav.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from "redux/menuSlice";


const GoogleAuth = () => {

    const isActive = useSelector(state=>state.menu.menuActive)
    const dispatch = useDispatch();

    return (
        <>
        <p className={scss.googleDecs}>Or sign in with</p>
        {isActive === true ? <NavLink to={'user'} className={scss.googleLink} onClick={()=>dispatch(setMenuActive(!isActive))}>
        <SvgInsert id="icon-google"/>
        <p className={scss.googleDecs}>Google</p>
        </NavLink>
        : <NavLink to={'user'} className={scss.googleLink}>
        <SvgInsert id="icon-google"/>
        <p className={scss.googleDecs}>Google</p>
        </NavLink>}
        </>
    )
}

export default GoogleAuth;