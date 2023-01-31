import scss from "./shared-layout.module.scss";
import base from "../../helpers/container.module.scss";
import Header from "components/Header/Header";

const SharedLayout = () => {

    return (
            <>
            <Header/>
        <section className={scss.background}>
            <div className={base.container}>
                <h1 className={scss.title}>Take good care of your small pets</h1>
            </div>
        </section>
        </>
    )
}

export default SharedLayout;