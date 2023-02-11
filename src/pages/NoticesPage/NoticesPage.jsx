import { Outlet } from "react-router-dom";

import scss from "./notices-page.module.scss";
import container from "helpers/container.module.scss";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";

import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";


const NoticesPage = () => {
    return (
        <main className={scss.main}>
            <div className={container.container}>
                <h2 className ={scss.main_title}>Find your favorite pet</h2>
                <NoticesSearch/>
                <AddNoticeButton/>
                <NoticesCategoriesNav />
                <Outlet />
            </div>
        </main>
    )
}

export default NoticesPage;
