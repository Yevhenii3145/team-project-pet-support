import scss from './notices-search.module.scss';
import SvgInsert from 'components/utilsFolder/Svg/Svg';
import { useState } from 'react';
import { getSearch } from '../../../redux/operations/noticesOperation';
import { useDispatch } from 'react-redux';
import { filterNotice } from 'redux/slices/filterSlice';
import { useParams } from 'react-router-dom';


const NoticesSearch = () => {
  const [search, setSearch] = useState('');
  const [searchBtn, setSearchBtn] = useState(true);
  const [activeInput, setActiveInput] = useState(false);
  const {categoryName} = useParams();
  const [page] = useState(1);
  const limit = 8;
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearch(e.currentTarget.value);
    dispatch(filterNotice(e.currentTarget.value));
  };

  const btnGetSearch = search => {
    const data = {
      search,
      categoryName,
      page,
      limit
    }
    setActiveInput(true);
    dispatch(getSearch(data));
    dispatch(filterNotice(search))
  };

  return (
    <div className={scss.search}>
      {activeInput ? 
            <input
            className={scss.searchInput}
            type="text"
            placeholder="Search"
            name="search"
            onChange={handleChange}
            value={search}
          /> :
          <input
          className={scss.searchInput}
          type="text"
          placeholder="Search"
          name="search"
          onChange={handleChange}
          value={search}
          disabled
        />
    }
    {search === '' ?
    <>
    {
      searchBtn ? 
      <button
      type="button"
      className={scss.get_searct_btn}
      onClick={() => {btnGetSearch(search)
      setSearchBtn(false)}}
    >
      <SvgInsert id="icon-search" />
    </button> : <button
    type="button"
    className={scss.get_searct_btn}
    onClick={() => {dispatch(filterNotice(null))
    setActiveInput(false)
    setSearchBtn(true)}}
  >
    <SvgInsert id="icon-search-exit" />
  </button>
    }
    </>
     :
            <button
            type="button"
            className={scss.get_searct_btn}
            onClick={() => {
              setSearch('')
              dispatch(filterNotice(''));
            }}
          >
            <SvgInsert id="icon-close" />
          </button>  
  }
    </div>
  );
};

export default NoticesSearch;
