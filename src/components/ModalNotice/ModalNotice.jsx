import scss from './modal-notice.module.scss';
import SvgInsert from '../Svg/Svg';

import { useDispatch, useSelector } from 'react-redux';
import {
  searchNotice,
  getAllFavorites,
  addNoticeToFavorite,
} from '../../redux/notices/notices-operation';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

const ModalNotice = ({ id, onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchNotice(id));
    dispatch(getAllFavorites());
  }, [id, dispatch]);

  const loading = useSelector(state => state.notices.loading);
  const notice = useSelector(state => state.notices.notice);
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  const isFavorite = favoriteNotices?.some(notice => notice._id === id);
  const [deleteContent, setDeleteContent] = useState('Remove');
  const [addedContent, setAddedContent] = useState('Add to');

  console.log(notice)

  const handleClickToFavorite = noticeId => {
    dispatch(addNoticeToFavorite(noticeId));
    if (isFavorite) {
      setDeleteContent('Add to');
    }
    if (!isFavorite) {
      setAddedContent('Remove');
    }
  };
  const date = new Date(notice.birthday)
  const formatDate = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.${date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1}.${date.getFullYear()}`

  return (
    <>
      {loading && <Loader />}
      {notice && (
        <div className={scss.modal_notice__content}>
          <div className={scss.modal_notice__content_info}>
            <div className={scss.modal_notice__close} onClick={onClose}>
              <SvgInsert id="icon-close" />
            </div>
            <div className={scss.modal_notice__image_content}>
              <img
                className={scss.modal_notice__image}
                src={notice.image}
                alt={notice.name}
              />
              <span className={scss.modal_notice__category}>
                {notice.category}
              </span>
            </div>
            <div>
              <h3 className={scss.modal_notice__title}>{notice.title}</h3>
              <ul className={scss.modal_notice__list}>
                <li className={scss.modal_notice__item}>
                  <h4 className={scss.modal_notice__item_title}>Name:</h4>
                  <p className={scss.modal_notice__item_description}>
                    {notice.name}
                  </p>
                </li>
                <li className={scss.modal_notice__item}>
                  <h4 className={scss.modal_notice__item_title}>Birthday:</h4>
                  <p className={scss.modal_notice__item_description}>
                    {formatDate}
                  </p>
                </li>
                <li className={scss.modal_notice__item}>
                  <h4 className={scss.modal_notice__item_title}>Breed:</h4>
                  <p className={scss.modal_notice__item_description}>
                    {notice.breed}
                  </p>
                </li>
                <li className={scss.modal_notice__item}>
                  <h4 className={scss.modal_notice__item_title}>Location:</h4>
                  <p className={scss.modal_notice__item_description}>
                    {notice.location}
                  </p>
                </li>
                <li className={scss.modal_notice__item}>
                  <h4 className={scss.modal_notice__item_title}>The sex:</h4>
                  <p className={scss.modal_notice__item_description}>
                    {notice.sex}
                  </p>
                </li>
                <li className={scss.modal_notice__item}>
                  <h4 className={scss.modal_notice__item_title}>Email:</h4>
                  <p className={scss.modal_notice__item_description}>
                    {notice.owner.email}
                  </p>
                </li>
                <li className={scss.modal_notice__item}>
                  <h4 className={scss.modal_notice__item_title}>Phone:</h4>
                  <p className={scss.modal_notice__item_description}>
                    {`+${notice.owner.phone}`}
                  </p>
                </li>
                {notice.category !== 'In good hands' && (
                  <li className={scss.modal_notice__item}>
                    <h4 className={scss.modal_notice__item_title}>Price:</h4>
                    <p className={scss.modal_notice__item_description}>
                      {`${notice.price}$`}
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <article className={scss.modal_notice__item_comment}>
            <span className={scss.modal_notice__item_title}>Comments:</span>
            {notice.comments}
          </article>
          <div className={scss.modal_notice__button_container}>
            <a
              href={`tel:+${notice.phone}`}
              className={`${scss.button__primary_main} ${scss.modal_notice__button} ${scss.modal_notice__button_contact}`}
              type="button"
            >
              Contact
            </a>
            {!loading && (
              <>
                {isFavorite && (
                  <button
                    onClick={() => {
                      handleClickToFavorite(id);
                    }}
                    className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`}
                    type="button"
                  >
                    {deleteContent}{' '}
                    <SvgInsert
                      className={scss.modal_notice__button_favorite}
                      id="icon-heart-favorite"
                    />
                  </button>
                )}
                {!isFavorite && (
                  <button
                    onClick={() => {
                      handleClickToFavorite(id);
                    }}
                    className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`}
                    type="button"
                  >
                    {' '}
                    {addedContent}
                    <SvgInsert
                      className={scss.modal_notice__button_favorite}
                      id="icon-heart-favorite"
                    />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNotice;
