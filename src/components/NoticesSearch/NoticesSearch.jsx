
import scss from "./notices-search.module.scss";
import SvgInsert from 'components/Svg/Svg';
import { useState, useEffect } from "react";
import axios from "axios";
// import { format } from 'date-fns';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {getSearch} from "../../redux/notices/notices-operation"
import { useDispatch } from 'react-redux';

const { REACT_APP_BASE_URL } = process.env;
console.log(REACT_APP_BASE_URL);

const NoticesSearch = () => {
  // const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  // const [inputValue, setInputValue] = useState(false);


  // const getSearch = async () => {
  //   const response = await axios.get(
  //     `${REACT_APP_BASE_URL}/api/notices/search?keyword=${search}`
  //   );
  //   // setSearch('');
  //   console.log("response.data", response.data)
  //   return response.data;
  // };

  const handleChange = e => {
    console.log(e.currentTarget.value)
    setSearch(e.currentTarget.value);
  };

  
  const btnGetSearch = (search) => {
     dispatch(getSearch(search));
    }
  // useEffect(() => {
  //   search.length > 0 ? setInputValue(true) : setInputValue(false);
  // }, [search.length]);

  // const reset = (e) => {
  //   setSearch('');
  // };

  // function noticesSearch() {
  //   if (!search) {
  //     return data;
  //   }
  //   const normalizedFilter = search.toLocaleLowerCase();
  //   const searchList = search.filter(news => {
  //     return news.title.toLocaleLowerCase().includes(normalizedFilter);
  //   });
  //   if (searchList.length === 0) {
  //     Notify.warning('Write a correct request');
  //   }
  //   return searchList;
  // }

  return (
    <div className={scss.search}>
      <input
        className={scss.searchInput}
        type="text"
        placeholder="Search"
        name="search"
        onInput={handleChange}
        value={search}
      />
      <button type="button" className={scss.get_searct_btn} onClick={() => btnGetSearch(search)}>
        <SvgInsert id="icon-search" />
      </button>
      
      {/* {inputValue && (
        <div onClick={() => reset()}>
          <SvgInsert id="icon-reset-search" />
        </div>)} */}
      
      {/* {!inputValue && <SvgInsert id="icon-search" />} */}
    </div>
  )
}

export default NoticesSearch;


