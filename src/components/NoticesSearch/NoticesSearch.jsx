import scss from "./notices-search.module.scss";
import SvgInsert from 'components/Svg/Svg';
import { useState, useEffect } from "react";
// import axios from "axios";
// import { format } from 'date-fns';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NoticesSearch = () => {
  // const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState(false);


  // const getSearch = async () => {
  //   const response = await axios.get(
  //     'http//localhost:4001/notices/search?keyword={e.currentTarget.value}'
  //   );
  //   return response.data;
  // };
  // console.log(getSearch)

// "/notices/search?keyword={yourKeyword}"
// localhost:4001

  const handleChange = e => {
    console.log(e.currentTarget.value)
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    search.length > 0 ? setInputValue(true) : setInputValue(false);
  }, [search.length]);

  const reset = (e) => {
    setSearch('');
  };

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
      {inputValue && (
        <div onClick={() => reset()}>
          <SvgInsert id="icon-reset-search" />
        </div>)}
      {!inputValue && <SvgInsert id="icon-search" />}
    </div>
  )
}

export default NoticesSearch;


