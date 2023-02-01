import NewsList from '../../components/NewsList/NewsList';
import s from './news-page.module.scss';
import sass from '../../helpers/container.module.scss';
import NewsFilter from '../../components/NewsFilter/NewsFilter';
import { useState, useEffect } from 'react';
import news from './news.json';
import { format } from 'date-fns';
// import { useSelector, useDispatch } from 'react-redux';
// import { setNewsFilter } from '../../redux/newsFilter/newsFilter-actions';
// import { getNewsFilter } from '../../redux/newsFilter/newsFilter-selectors';

const NewsPage = () => {
  // const dispatch = useDispatch();
  // const newsFilter = useSelector(getNewsFilter);

  // const handleChange = event => {
  //   dispatch(setNewsFilter(event.currentTarget.value));
  // };

  const [data, setData] = useState([]);

  useEffect(() => {
    // const worst = news.filter(({ date }) => typeof date === 'string');
    const formatDate = news.map(item => ({
      ...item,
      date: Number(format(new Date(item.date), 'T')),
    }));
    const sortDate = formatDate.sort(function (a, b) {
      return b.date - a.date;
    });
    // console.log(sortDate);
    setData(sortDate);
  }, []);

  const [filter, setFilter] = useState('');
  const [inputValue, setInputValue] = useState(false);

  const handleChange = event => {
    // console.log(filter.length);
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    filter.length > 0 ? setInputValue(true) : setInputValue(false);
  }, [filter.length]);

  const resetInput = event => {
    setFilter('');
  };

  function filterNews() {
    if (!filter) {
      return data;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterlist = data.filter(news => {
      return news.title.toLocaleLowerCase().includes(normalizedFilter);
    });
    return filterlist;
  }

  return (
    <div className={s.bg}>
      <div className={sass.container}>
        <div className={s.news}>
          <h1 className={s.title}>News</h1>
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
  );
};

export default NewsPage;
