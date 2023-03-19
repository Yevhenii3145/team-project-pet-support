import NewsList from '../../components/newsFolder/NewsList/NewsList'
import s from './news-page.module.scss'
import sass from '../../helpers/container.module.scss'
import NewsFilter from '../../components/newsFolder/NewsFilter/NewsFilter'
import { useState, useEffect } from 'react'
// import news from './news.json'
import { format } from 'date-fns'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { useTranslation } from 'react-i18next'

const NewsPage = () => {
    const { t, ready } = useTranslation()

    useEffect(() => {
        if (!ready) return 'loading translations...'
    }, [ready])

    const items = t('NewsPage', { returnObjects: true })

    const [data, setData] = useState([])

    useEffect(() => {
        const formatDate = items.NewsList.map(item => ({
            ...item,
            date: Number(format(new Date(item.date), 'T')),
        }))
        const sortDate = formatDate.sort(function (a, b) {
            return b.date - a.date
        })
        setData(sortDate)
    }, [items])

    const [filter, setFilter] = useState('')
    const [inputValue, setInputValue] = useState(false)

    const handleChange = event => {
        setFilter(event.currentTarget.value)
    }

    useEffect(() => {
        filter.length > 0 ? setInputValue(true) : setInputValue(false)
    }, [filter.length])

    const resetInput = event => {
        setFilter('')
    }

    function filterNews() {
        if (!filter) {
            return data
        }
        const normalizedFilter = filter.toLocaleLowerCase()
        const filterlist = data.filter(news => {
            return news.title.toLocaleLowerCase().includes(normalizedFilter)
        })
        if (filterlist.length === 0) {
            Notify.warning('Write a correct request', {
                distance: '100px',
                opacity: '0.8',
                useIcon: false,
                fontSize: '18px',
                borderRadius: '20px',
                showOnlyTheLastOne: true,
            })
        }
        return filterlist
    }

    return (
        <div className={s.bg}>
            <div className={sass.container}>
                <div className={s.news}>
                    <h1 className={s.title}>{t('NewsPage.title')}</h1>
                    <NewsFilter
                        input={filter}
                        onChange={handleChange}
                        resetInput={resetInput}
                        inputValue={inputValue}
                    />
                    <NewsList data={filterNews()} />
                </div>
            </div>
        </div>
    )
}

export default NewsPage
