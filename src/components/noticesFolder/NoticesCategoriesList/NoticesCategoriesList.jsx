import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NoticesCategoryList from 'components/noticesFolder/NoticesCategoryList/NoticesCategoryList'
import { fetchCategoryNotices, getAllFavorites } from 'redux/operations/noticesOperation'
import { getStore, getNotices, getTotalNotices } from 'redux/selectors/noticesSelectors'
import { getFilter } from 'redux/selectors/filterSelector'
import Loader from 'components/utilsFolder/Loader/Loader'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import useAuth from 'redux/utils/useAuth'
import { EmptyFavoriteList } from '../EmptyFavoriteList/EmptyFavoriteList'
import { EmptyOwnList } from '../EmptyOwnList/EmptyOwnList'
import LoadMore from 'components/utilsFolder/LoadMore/LoadMore'
import { Events, scroller } from 'react-scroll'
import { useState, useMemo, useEffect } from 'react'
import { setNameCategory } from 'redux/slices/noticesSlice'

const NoticesCategoriesList = () => {
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    const pets = useSelector(getNotices)
    const filter = useSelector(getFilter)
    const totalNotices = useSelector(getTotalNotices)
    const { loading, error } = useSelector(getStore)
    const isLogin = useAuth()
    const [page, setPage] = useState(1)
    const [name, setName] = useState('sell')
    const limit = 8


const memoizedValue = useMemo(
    () => {
        const data = {
            categoryName: name === categoryName ? name : (setName(categoryName), setPage(1), name),
            page,
            limit
        }
    return data
}, [categoryName, page, limit, name])

const filterNotices = () => {
    if (!filter) {
return pets
}

const normalizedFilter = filter.toLocaleLowerCase()

const filteredNotice = pets.filter(({ title }) => {
const normalizedTittle = title.toLocaleLowerCase()
const filterResult = normalizedTittle.includes(normalizedFilter)
    return filterResult
})

return filteredNotice
}

useEffect(() => {
    dispatch(setNameCategory([categoryName, page]))
}, [categoryName,page, dispatch])

useEffect(() => {
    Events.scrollEvent.register('begin', function () {
        console.log('begin', arguments);
    });
    
    Events.scrollEvent.register('end', function () {
        console.log('end', arguments);
    });
}, []);
    
useEffect(() => {
    return () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };
});

useEffect(() => {

if (isLogin) {
    dispatch(getAllFavorites())
}

dispatch(fetchCategoryNotices(memoizedValue))

}, [dispatch, isLogin, memoizedValue])

const scrollTo = () => {
        scroller.scrollTo('scroll-to-element', {
        duration: 2000,
        delay: 100,
        smooth: 'easeInOutQuint',
        offset: -150,
    });
}


    return (
        <>
            {loading && <Loader />}
            {categoryName === 'own' && pets.length === 0 && <EmptyOwnList />}
            {categoryName === 'favorite' && pets.length === 0 && <EmptyFavoriteList />}
            {pets.length > 0 && <NoticesCategoryList pets={filterNotices()} data={memoizedValue}/>}
            {totalNotices / 8 > page ? <LoadMore scroll={scrollTo} changePage={setPage}/> : null}
            {error && Notify.failure('Oops, something went wrong', 
            {distance: '100px',
            opacity: '0.8',
            useIcon: false,
            fontSize: '18px',
            borderRadius: '20px',
            showOnlyTheLastOne: true})}
        </>
    )
}

export default NoticesCategoriesList
