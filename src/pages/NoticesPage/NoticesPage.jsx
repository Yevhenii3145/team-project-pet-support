import scss from "./notices-page.module.scss";
import container from "helpers/container.module.scss";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticeCategoryItem from "components/NoticeCategoryItem/NoticeCategoryItem";
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
                <NoticeCategoryItem />
            </div>
        </main>
    )
}

export default NoticesPage;
