import SvgInsert from "../../Svg/Svg";
import scss from "./google-nav.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from "redux/menuSlice";

const {REACT_APP_BASE_URL} = process.env;

const GoogleAuth = () => {

    const isActive = useSelector(state=>state.menu.menuActive)
    const dispatch = useDispatch();

    return (
        <div className={scss.googleBox}>
        <p className={scss.googleDecs}>Or sign in with</p>
        {isActive === true ? <a href={`${REACT_APP_BASE_URL}/api/auth/google`} className={scss.googleLink} onClick={()=>dispatch(setMenuActive(!isActive))}>
        <SvgInsert id="icon-google"/>
        <p className={scss.googleDecs}>Google</p>
        </a>
        : <a href={`${REACT_APP_BASE_URL}/api/auth/google`} className={scss.googleLink}>
        <SvgInsert id="icon-google"/>
        <p className={scss.googleDecs}>Google</p>
        </a>}
        </div>
    )
}

export default GoogleAuth;
