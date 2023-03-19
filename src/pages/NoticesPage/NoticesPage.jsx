import { Outlet } from 'react-router-dom'

import scss from './notices-page.module.scss'
import container from 'helpers/container.module.scss'
import NoticesCategoriesNav from 'components/noticesFolder/NoticesCategoriesNav/NoticesCategoriesNav'

import NoticesSearch from 'components/noticesFolder/NoticesSearch/NoticesSearch'
import AddNoticeButton from 'components/noticesFolder/AddNoticeButton/AddNoticeButton'
import { getFilter } from 'redux/selectors/filterSelector'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const NoticesPage = () => {
    const filter = useSelector(getFilter)

    const { t } = useTranslation()

    return (
        <main className={scss.main}>
            <div className={container.container}>
                <h2 className={scss.main_title}>{t('NoticesPage.title')}</h2>
                <NoticesSearch />
                <AddNoticeButton />
                {filter === null ? (
                    <NoticesCategoriesNav />
                ) : (
                    <p className={scss.notices__all_pets}>
                        {t('NoticesPage.categories.all')}
                    </p>
                )}
                <Outlet />
            </div>
        </main>
    )
}

export default NoticesPage
