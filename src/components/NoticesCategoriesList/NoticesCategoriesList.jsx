import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NoticesCategoryList from 'components/NoticesCategoryList/NoticesCategoryList';
import {
  fetchCategoryNotices,
  getAllFavorites,
} from 'redux/notices/notices-operation';
import { getStore, getNotices } from 'redux/notices/notices-selectors';
import { getFilter } from 'redux/filter/filter-selector';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import useAuth from 'shared/hooks/useAuth';

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const pets = useSelector(getNotices);
  const filter = useSelector(getFilter);
  console.log(filter);

  const filterNotices = () => {
    if (!filter) {
      return pets;
    }

    const normalizedFilter = filter.toLocaleLowerCase();

    const filteredNotice = pets.filter(({ title }) => {
      console.log(title);
      const normalizedTittle = title.toLocaleLowerCase();
      const filterResult = normalizedTittle.includes(normalizedFilter);
      return filterResult;
    });

    return filteredNotice;
  };
  console.log(filterNotices());

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
      {pets.length > 0 && (
        <NoticesCategoryList
          pets={filterNotices()}
          categoryNotices={categoryName}
        />
      )}
      {error && Notify.failure('Oops, something went wrong')}
    </>
  );
};

export default NoticesCategoriesList;
