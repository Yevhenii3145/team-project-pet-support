import s from './newsItem.module.scss';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import { format } from 'date-fns';
import { useState } from 'react';

// compareAsc;
const NewsItem = ({ title, url, description, date }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1280px)').matches
  );

  const formatDate = format(new Date(date), 'dd/MM/yyyy');
  const zeroDate = formatDate === '01/01/1970' ? '' : formatDate;

  // console.log(formatDate);
  return (
    <li className={s.news_item}>
      <span className={s.news_line}></span>
      <EllipsisText
        className={s.news_title}
        text={title}
        tooltip={title}
        length={`${matches ? 50 : 35}`}
      />
      <EllipsisText className={s.news_text} text={description} length={230} />
      <div className={s.wrap_news_info}>
        <p className={s.news_date}>{zeroDate}</p>
        <a className={s.news_link} href={url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </li>
  );
};
export default NewsItem;

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};
