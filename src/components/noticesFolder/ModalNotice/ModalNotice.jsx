import scss from './modal-notice.module.scss';
import SvgInsert from '../../utilsFolder/Svg/Svg';
import useAuth from 'redux/utils/useAuth';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/utilsFolder/Loader/Loader';
import { Link } from 'react-router-dom';
import { fetchInfoPetUser, fetchInfoUser } from 'redux/operations/userGuestOperations';

const ModalNotice = ({ id, onClose, onAddDelete, categoryNotice, favorite, deleteNotice }) => {
  const loading = useSelector(state => state.notices.loading);
  const notice = useSelector(state => state.notices.notice);
  const idUser = useSelector(state => state.auth.user.userId);
  const isLogin = useAuth();
  const dispatch = useDispatch()

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
                    {categoryNotice(notice.category)}
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
                    {notice.category === 'sell' && (
                      <li className={scss.modal_notice__item}>
                        <h4 className={scss.modal_notice__item_title}>
                          Price:
                        </h4>
                        <p className={scss.modal_notice__item_description}>
                          {notice.price}
                        </p>
                      </li>
                    )}
                      <li className={scss.modal_notice__item}>
                          <h4 className={scss.modal_notice__item_title}>Owner:</h4>
                          <Link to={notice.owner._id === idUser ? '/user' : `/user/${notice.owner._id}`} 
                          onClick={() => {
                              if(notice.owner._id === idUser) {
                                document.body.style.overflow = 'visible';
                                return
                              } else {
                                document.body.style.overflow = 'visible';
                                dispatch(fetchInfoUser(notice.owner._id), fetchInfoPetUser(notice.owner._id))
                              } }} 
                          className={`${scss.modal_notice__item_description} ${scss.modal_notice__item_description_link}`}>{notice.owner.name} &#8601;</Link>
                      </li>
                  </ul>
                </div>
              </div>
              <article className={scss.modal_notice__item_comment}>
                <span className={scss.modal_notice__item_title}>Comments:</span>
                {notice.comments}
              </article>
              <div className={scss.modal_notice__button_container}>
              
                <a href={`tel:+${notice.phone}`}
                  className={`${scss.button__primary_main} ${scss.modal_notice__button} ${scss.modal_notice__button_contact}`} type="button">
                  Contact
                </a>

                  <button onClick={() => {onAddDelete(id);}}
                    className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`} type="button">
                    {favorite ? 'Remove' : 'Add to'}
                    <SvgInsert className={scss.modal_notice__button_favorite} id="icon-heart-favorite"/>
                  </button>

                  {isLogin && idUser === notice.owner._id && (
              <button type="button" className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`} onClick={() => deleteNotice(notice.owner_id)}>
                Delete
                <SvgInsert id="icon-delete-notice" />
              </button>)}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ModalNotice;
