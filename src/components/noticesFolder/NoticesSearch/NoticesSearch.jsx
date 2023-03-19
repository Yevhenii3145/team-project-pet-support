import scss from './notices-search.module.scss'
import SvgInsert from 'components/utilsFolder/Svg/Svg'
import { useState } from 'react'
import { getSearch } from '../../../redux/operations/noticesOperation'
import { useDispatch } from 'react-redux'
import { filterNotice } from 'redux/slices/filterSlice'
import { useTranslation } from 'react-i18next'

const { REACT_APP_BASE_URL } = process.env
console.log(REACT_APP_BASE_URL)

const NoticesSearch = () => {
    const [search, setSearch] = useState('')
    const [searchBtn, setSearchBtn] = useState(true)
    const [activeInput, setActiveInput] = useState(false)
    const dispatch = useDispatch()

    const handleChange = e => {
        setSearch(e.currentTarget.value)
        dispatch(filterNotice(e.currentTarget.value))
    }

    const btnGetSearch = search => {
        setActiveInput(true)
        dispatch(getSearch(search))
        dispatch(filterNotice(search))
    }
    const { t } = useTranslation()

    return (
        <div className={scss.search}>
            {activeInput ? (
                <input
                    className={scss.searchInput}
                    type="text"
                    placeholder={t('NoticesPage.search')}
                    name="search"
                    onChange={handleChange}
                    value={search}
                />
            ) : (
                <input
                    className={scss.searchInput}
                    type="text"
                    placeholder={t('NoticesPage.search')}
                    name="search"
                    onChange={handleChange}
                    value={search}
                    disabled
                />
            )}
            {search === '' ? (
                <>
                    {searchBtn ? (
                        <button
                            type="button"
                            className={scss.get_searct_btn}
                            onClick={() => {
                                btnGetSearch(search)
                                setSearchBtn(false)
                            }}
                        >
                            <SvgInsert id="icon-search" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={scss.get_searct_btn}
                            onClick={() => {
                                dispatch(filterNotice(null))
                                setActiveInput(false)
                                setSearchBtn(true)
                            }}
                        >
                            <SvgInsert id="icon-search-exit" />
                        </button>
                    )}
                </>
            ) : (
                <button
                    type="button"
                    className={scss.get_searct_btn}
                    onClick={() => {
                        setSearch('')
                        dispatch(filterNotice(''))
                    }}
                >
                    <SvgInsert id="icon-close" />
                </button>
            )}
        </div>
    )
}

export default NoticesSearch
