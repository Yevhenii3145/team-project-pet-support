import scss from "./shared-layout.module.scss";
import base from "../../helpers/container.module.scss";
import Header from "components/Header/Header";
import love from "../../images/heart-desktop-home.png";

const SharedLayout = () => {

    return (
            <>
            <Header/>
        <section className={scss.background}>
            <div className={base.container}>
                <div className={scss.wrapperHome}>
                <h1 className={scss.title}>Take good care of your small pets</h1>
                <div className={scss.image}>
                    <img src={love} alt="heart" />
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default SharedLayout;