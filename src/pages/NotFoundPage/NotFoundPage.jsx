import scss from "./not-found-page.module.scss";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {

    return (
        <section className={scss.notfound__section}>
            <div className={scss.container}>
                <NavLink className={`${scss.button__primary} ${scss.notfound__button}`} to="/">&#127968; HOME</NavLink>
            </div>
        </section>
    )
}

export default NotFoundPage;