
import { useDispatch, useSelector } from "react-redux";
import scss from "./logo.module.scss";
import SvgInsert from "../../utilsFolder/Svg/Svg";
import { setMenuActive } from "redux/slices/menuSlice";
import { NavLink } from "react-router-dom";


const Logo = () => {
const isActive = useSelector(state=>state.menu.menuActive)
const dispatch = useDispatch();

    return (
        <div className={scss.logoWrapper}>
        <NavLink to="/" className={scss.logo} title="logoLink">
            <SvgInsert id="icon-logo" />
        </NavLink>
            {isActive === false
            ? <button type="button" title="openMenu" onClick={()=>dispatch(setMenuActive(!isActive))} className={scss.button}><SvgInsert id="icon-menu-open"/> </button>
            : <button type="button" title="closemenu" onClick={()=>dispatch(setMenuActive(!isActive))} className={scss.button}><SvgInsert id="icon-menu-close"/></button>}
        </div>
    )
}

export default Logo;

