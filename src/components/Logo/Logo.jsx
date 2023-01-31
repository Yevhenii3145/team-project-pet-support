
import scss from "./logo.module.scss";
import img from "../../images/cat1.webp";
import SvgInsert from "../Svg/Svg";


const Logo = () => {

    return (
        <div className={scss.logoWrapper}>
            <SvgInsert id="icon-logo" />
            <SvgInsert id="icon-menu-open" />
            <SvgInsert id="icon-menu-close" />
        </div>
    )
}

export default Logo;

