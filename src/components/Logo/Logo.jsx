
import { useDispatch, useSelector } from "react-redux";
import scss from "./logo.module.scss";
import SvgInsert from "../Svg/Svg";
import { setMenuActive } from "redux/menuSlice";
import { NavLink } from "react-router-dom";


const Logo = () => {
const isActive = useSelector(state=>state.menu.menuActive)
const dispatch = useDispatch();

    return (
        <NavLink to="/" className={scss.logoWrapper}>
            <SvgInsert id="icon-logo" />
            {isActive === false
            ? <a onClick={()=>dispatch(setMenuActive(!isActive))}><SvgInsert id="icon-menu-open"/> </a>
            : <a onClick={()=>dispatch(setMenuActive(!isActive))}><SvgInsert id="icon-menu-close"/></a>}
        </NavLink>
    )
}

export default Logo;

