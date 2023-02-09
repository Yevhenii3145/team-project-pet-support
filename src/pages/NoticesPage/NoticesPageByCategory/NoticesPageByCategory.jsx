import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";
import { fetchCategoryNotices } from "redux/notices/notices-operation";
import { getNotices } from "redux/notices/notices-selectors";
// import Loader from 'components/Loader/Loader';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NoticesPageByCategory = () => {

    const { categoryName } = useParams();
    const pets = useSelector(getNotices);
    // const { loading, error } = useSelector(getStore);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchCategoryNotices(categoryName))
    }, [dispatch, categoryName])

    return (
        <>
            {/* {loading && <Loader/>} */}
            {pets && <NoticesCategoriesList pets={pets} />}
            {/* {error && Notify.failure("Oops, something went wrong") } */}
        </>
    )
}

export default NoticesPageByCategory;