
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
            ? <a href="#" onClick={()=>dispatch(setMenuActive(!isActive))}><SvgInsert id="icon-menu-open"/> </a>
            : <a href="#" onClick={()=>dispatch(setMenuActive(!isActive))}><SvgInsert id="icon-menu-close"/></a>}
        </div>
    )
}

export default Logo;

