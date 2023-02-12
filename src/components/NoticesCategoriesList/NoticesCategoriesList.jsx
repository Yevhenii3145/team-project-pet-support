import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NoticesCategoryList from 'components/NoticesCategoryList/NoticesCategoryList';
import {
  fetchCategoryNotices,
  getAllFavorites,
} from 'redux/notices/notices-operation';
import { getStore, getNotices } from 'redux/notices/notices-selectors';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import useAuth from 'shared/hooks/useAuth';

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const pets = useSelector(getNotices);
  const { loading, error } = useSelector(getStore);

  const isLogin = useAuth();
  useEffect(() => {
    if (isLogin) {
      dispatch(getAllFavorites());
    }
    dispatch(fetchCategoryNotices(categoryName));
  }, [dispatch, categoryName, isLogin]);

  return (
    <>
      {loading && <Loader />}
      {pets.length > 0 && <NoticesCategoryList pets={pets} categoryNotices={categoryName} />}
      {error && Notify.failure('Oops, something went wrong')}
    </>
  );
};

export default NoticesCategoriesList;
