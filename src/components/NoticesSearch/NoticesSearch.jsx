import scss from './notices-search.module.scss';
import SvgInsert from 'components/Svg/Svg';
import { useState } from 'react';
import { getSearch } from '../../redux/notices/notices-operation';
import { useDispatch } from 'react-redux';
import { filterNotice } from 'redux/filter/filter-slice';

const { REACT_APP_BASE_URL } = process.env;
console.log(REACT_APP_BASE_URL);

const NoticesSearch = ({ userSearching }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearch(e.currentTarget.value);
    console.log(search);
    userSearching(e.currentTarget.value);
    dispatch(filterNotice(e.currentTarget.value));
  };

  const btnGetSearch = search => {
    dispatch(getSearch(search));
  };

  return (
    <div className={scss.search}>
      <input
        className={scss.searchInput}
        type="text"
        placeholder="Search"
        name="search"
        onChange={handleChange}
        value={search}
      />
      <button
        type="button"
        className={scss.get_searct_btn}
        onClick={() => btnGetSearch(search)}
      >
        <SvgInsert id="icon-search" />
      </button>
    </div>
  );
};

export default NoticesSearch;
