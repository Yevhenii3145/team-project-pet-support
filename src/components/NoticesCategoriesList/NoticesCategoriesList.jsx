import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import scss from "./notices-categories-list.module.scss";
import NoticesCategoryList from "components/NoticesCategoryList/NoticesCategoryList";
import { fetchCategoryNotices } from "redux/notices/notices-operation";
import { getStore, getNotices } from "redux/notices/notices-selectors";
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NoticesCategoriesList = () => {

    const { categoryName } = useParams();
    const pets = useSelector(getNotices);
    const { loading, error } = useSelector(getStore);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchCategoryNotices(categoryName))
    }, [dispatch, categoryName])

    return (
        <>
            {loading && <Loader/>}
            {pets && <NoticesCategoryList pets={pets} />}
            {error && Notify.failure("Oops, something went wrong") }
        </>
    )
}

export default NoticesCategoriesList;