import { Outlet, useParams } from "react-router-dom";

import scss from "./notices-page.module.scss";
import container from "helpers/container.module.scss";
import NoticesCategoriesNav from "components/noticesFolder/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesSearch from "components/noticesFolder/NoticesSearch/NoticesSearch";


const NoticesPage = () => {

    const {categoryName} = useParams();

    return (
        <main className={scss.main}>
            <div className={container.container}>
                <h2 className ={scss.main_title}>Find your favorite pet</h2>
                {categoryName !== 'favorite' && categoryName !== 'own' && <NoticesSearch/>}
                <NoticesCategoriesNav />
                <Outlet/>
            </div>
        </main>
    )
}

export default NoticesPage;
