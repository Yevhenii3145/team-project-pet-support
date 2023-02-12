import scss from './modal-notice.module.scss';
import SvgInsert from '../Svg/Svg';

import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

const ModalNotice = ({ id, onClose, onAddDelete, favorite }) => {
  const loading = useSelector(state => state.notices.loading);
  const notice = useSelector(state => state.notices.notice);

  const formatDate = date => {
    const dateFormat = new Date(date);
    return `${
      dateFormat.getMonth() + 1 < 10
        ? `0${dateFormat.getMonth() + 1}`
        : dateFormat.getMonth() + 1
    }.${
      dateFormat.getDate() < 10
        ? `0${dateFormat.getDate()}`
        : dateFormat.getDate()
    }.${dateFormat.getFullYear()}`;
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {notice !== null && (
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
                      <h4 className={scss.modal_notice__item_title}>
                        Birthday:
                      </h4>
                      <p className={scss.modal_notice__item_description}>
                        {formatDate(notice.birthday)}
                      </p>
                    </li>
                    <li className={scss.modal_notice__item}>
                      <h4 className={scss.modal_notice__item_title}>Breed:</h4>
                      <p className={scss.modal_notice__item_description}>
                        {notice.breed}
                      </p>
                    </li>
                    <li className={scss.modal_notice__item}>
                      <h4 className={scss.modal_notice__item_title}>
                        Location:
                      </h4>
                      <p className={scss.modal_notice__item_description}>
                        {notice.location}
                      </p>
                    </li>
                    <li className={scss.modal_notice__item}>
                      <h4 className={scss.modal_notice__item_title}>
                        The sex:
                      </h4>
                      <p className={scss.modal_notice__item_description}>
                        {notice.sex}
                      </p>
                    </li>
                    <li className={scss.modal_notice__item}>
                      <h4 className={scss.modal_notice__item_title}>Email:</h4>
                      <a href={`mailto:${notice.owner.email}`} className={`${scss.modal_notice__item_description} ${scss.modal_notice__item_description_link}`} type="button">
                        {notice.owner.email}
                      </a>
                    </li>
                    <li className={scss.modal_notice__item}>
                      <h4 className={scss.modal_notice__item_title}>Phone:</h4>
                      <a href={`tel:+${notice.owner.phone}`} className={`${scss.modal_notice__item_description} ${scss.modal_notice__item_description_link}`} type="button">
                        {`+${notice.owner.phone}`}
                      </a>
                    </li>
                    {notice.category !== 'In good hands' && (
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          Price:
                        </h4>
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
                {favorite && (
                  <button
                    onClick={() => {
                      onAddDelete(id);
                    }}
                    className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`}
                    type="button"
                  >
                    Remove
                    <SvgInsert
                      className={scss.modal_notice__button_favorite}
                      id="icon-heart-favorite"
                    />
                  </button>
                )}
                {!favorite && (
                  <button
                    onClick={() => {
                      onAddDelete(id);
                    }}
                    className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`}
                    type="button"
                  >
                    Add to
                    <SvgInsert
                      className={scss.modal_notice__button_favorite}
                      id="icon-heart-favorite"
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ModalNotice;
