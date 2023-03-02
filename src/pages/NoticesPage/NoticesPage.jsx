import { Outlet } from "react-router-dom";

import scss from "./notices-page.module.scss";
import container from "helpers/container.module.scss";
import NoticesCategoriesNav from "components/noticesFolder/NoticesCategoriesNav/NoticesCategoriesNav";

import NoticesSearch from "components/noticesFolder/NoticesSearch/NoticesSearch";
import AddNoticeButton from "components/noticesFolder/AddNoticeButton/AddNoticeButton";
import { getFilter } from 'redux/selectors/filterSelector';
import { useSelector } from 'react-redux';


const NoticesPage = () => {
    const filter = useSelector(getFilter);

    return (
        <main className={scss.main}>
            <div className={container.container}>
                <h2 className ={scss.main_title}>Find your favorite pet</h2>
                <NoticesSearch/>
                <AddNoticeButton/>
                {filter === null ? <NoticesCategoriesNav /> : <p className={scss.notices__all_pets}>All pets</p>}
                <Outlet/>
            </div>
        </main>
    )
}

export default NoticesPage;
