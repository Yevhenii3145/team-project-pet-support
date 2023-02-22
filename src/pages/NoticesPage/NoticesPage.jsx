import { Outlet } from "react-router-dom";

import scss from "./notices-page.module.scss";
import container from "helpers/container.module.scss";
import NoticesCategoriesNav from "components/noticesFolder/NoticesCategoriesNav/NoticesCategoriesNav";

import NoticesSearch from "components/noticesFolder/NoticesSearch/NoticesSearch";
import AddNoticeButton from "components/noticesFolder/AddNoticeButton/AddNoticeButton";
import { useState } from "react";


const NoticesPage = () => {
    const [searching, setSearching] = useState(false)

    const handleDownSearch = (value) => {
        if(value.length > 0){
            return setSearching(true);
        }
        if(value.length === 0){
            return setSearching(false)
        }
    }

    return (
        <main className={scss.main}>
            <div className={container.container}>
                <h2 className ={scss.main_title}>Find your favorite pet</h2>
                <NoticesSearch userSearching={handleDownSearch}/>
                <AddNoticeButton/>
                {!searching && <NoticesCategoriesNav />}
                <Outlet/>
            </div>
        </main>
    )
}

export default NoticesPage;
