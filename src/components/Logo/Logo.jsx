
import { useDispatch, useSelector } from "react-redux";
import scss from "./logo.module.scss";
import SvgInsert from "../Svg/Svg";
import { setMenuActive } from "redux/menuSlice";
import { NavLink } from "react-router-dom";


const Logo = () => {
const isActive = useSelector(state=>state.menu.menuActive)
const dispatch = useDispatch();

    return (
        <div className={scss.logoWrapper}>
        <NavLink to="/">
            <SvgInsert id="icon-logo" />
        </NavLink>
            {isActive === false
            ? <button type="button"  onClick={()=>dispatch(setMenuActive(!isActive))}><SvgInsert id="icon-menu-open"/> </button>
            : <button type="button"  onClick={()=>dispatch(setMenuActive(!isActive))}><SvgInsert id="icon-menu-close"/></button>}
        </div>
    )
}

export default Logo;

