import scss from "./notices-search.module.scss";
import SvgInsert from 'components/Svg/Svg';
import { useState, useEffect } from "react";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function NoticesSearch() {
  // const [data, setData] = useState([]);
    const [search, setSearch] = useState('')
    const [inputValue, setInputValue] = useState(false);

    const handleChange = e => {
      setSearch(e.currentTarget.value);
    };

    useEffect(() => {
      search.length > 0 ? setInputValue(true) : setInputValue(false);
    }, [search.length]);

    const resetInput = (event) => {
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
              input={search}
            />
            {inputValue && (<div onClick={() => resetInput()}><SvgInsert id="icon-reset-search" /></div>)}
            {!inputValue && <SvgInsert id="icon-search" />}
          </div>
    )
}

// "/notices/search?keyword={yourKeyword}"
