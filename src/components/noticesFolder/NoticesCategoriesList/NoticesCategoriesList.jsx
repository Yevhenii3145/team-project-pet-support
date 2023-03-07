import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NoticesCategoryList from 'components/noticesFolder/NoticesCategoryList/NoticesCategoryList'
import {
    fetchCategoryNotices,
    getAllFavorites,
} from 'redux/operations/noticesOperation'
import { getStore, getNotices } from 'redux/selectors/noticesSelectors'
import { getFilter } from 'redux/selectors/filterSelector'
import Loader from 'components/utilsFolder/Loader/Loader'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import useAuth from 'redux/utils/useAuth'
import { EmptyFavoriteList } from '../EmptyFavoriteList/EmptyFavoriteList'
import { EmptyOwnList } from '../EmptyOwnList/EmptyOwnList'
import LoadMore from 'components/utilsFolder/LoadMore/LoadMore'

const NoticesCategoriesList = () => {
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    const pets = useSelector(getNotices)
    const filter = useSelector(getFilter)
    // const totalNotices = useSelector(getTotalNotices)
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')
    console.log(pets);

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

    const { loading, error } = useSelector(getStore)

    const isLogin = useAuth()
    useEffect(() => {

        const data = {
            categoryName,
            page,
            limit, 
        }

        if (isLogin) {
            dispatch(getAllFavorites())
        }
        dispatch(fetchCategoryNotices(data))
    }, [dispatch, isLogin, categoryName, limit, page])

    return (
        <>
            {loading && <Loader />}
            {categoryName === 'own' && pets.length === 0 && <EmptyOwnList />}
            {categoryName === 'favorite' && pets.length === 0 && (
                <EmptyFavoriteList />
            )}
            {pets.length > 0 && (
                <NoticesCategoryList
                    pets={filterNotices()}
                />
            )}
            {pets.length < 8 ? null : <LoadMore/>}
            {error && Notify.failure('Oops, something went wrong')}
        </>
    )
}

export default NoticesCategoriesList
