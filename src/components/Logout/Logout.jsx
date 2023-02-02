import scss from "./logout.module.scss";
import SvgInsert from "../Svg/Svg";

export function Logout() {
    return (
        <div className={scss.logout_box}>
            <button className={scss.logout_button} type="button"><SvgInsert id='icon-logout'/>Logout</button>
        </div>
    )
}