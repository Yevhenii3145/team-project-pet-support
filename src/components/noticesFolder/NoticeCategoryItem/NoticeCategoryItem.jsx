import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { formatDistanceStrict } from 'date-fns';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import scss from './notice-category-item.module.scss';
import SvgInsert from 'components/utilsFolder/Svg/Svg';
import {
  fetchCategoryNotices,
  addNoticeToFavorite,
  deleteNotice,
  searchNotice,
  getAllFavorites,
} from 'redux/operations/noticesOperation';
import useAuth from 'redux/utils/useAuth';
import Modal from '../ModalNotice/Modal/Modal';
import ModalNotice from '../ModalNotice/ModalNotice';
import { Link } from 'react-router-dom';
import { fetchInfoPetUser, fetchInfoUser } from 'redux/operations/userGuestOperations';

const NoticeCategoryItem = ({ pet, categoryNotices }) => {
  const {
    _id,
    image,
    title,
    breed,
    location,
    birthday,
    price,
    category,
    owner,
  } = pet;

  
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const idUser = useSelector(state => state.auth.user.userId)
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  const loading = useSelector(state => state.notices.loading);

  const [isFavorite, setIsFavorite] = useState(isLogin ?
    favoriteNotices !== null &&
      favoriteNotices.some(notice => notice._id === _id) : null
  );


  const btnAddToFavorite = noticeId => {
    if (isLogin) {
      dispatch(addNoticeToFavorite(noticeId));
      dispatch(getAllFavorites);
      dispatch(fetchCategoryNotices(categoryNotices));
      setIsFavorite(!isFavorite);
      return;
    }
    Notify.failure('You need authorization');
  };

  function closeModal() {
    setModalShow(false);
    document.body.style.overflow = 'visible';
  }

  const showModal = () => {
    document.body.style.overflow = 'hidden'; 
    setModalShow(true);
    dispatch(searchNotice(pet._id));
  };

  const getPlacePet = () => {
    const result = location.split(', ');
    return result[0];
  };

  const btnDeleteNotice = noticeId => {
    Confirm.show(
      '',
      'Are you sure you want to delete notis?',
      'Yes',
      'No',
      () => { dispatch(deleteNotice(noticeId)) },
      () => {},
      {
        messageFontSize: '20px',
        borderRadius: '8px',
        cssAnimationStyle: 'zoom',
        okButtonColor: '#ffffff',
        okButtonBackground: '#eebb9c',
        cancelButtonColor: '#ffffff',
        cancelButtonBackground: '#F59256',
      },
    );
  };

  const getAgePet = formatDistanceStrict(new Date(), new Date(birthday));

  const getCategoryNotice = category => {
    if (category === "for-free") {
      category = "in good hands";
    }
    if (category === "lost-found") {
      category = "lost/found";
    }
    return category;
  }

  return (
    loading ? <p>loading...</p> :
      <>
      {modalShow && (
        <>
          <Modal onClose={closeModal}>
            <ModalNotice
              id={pet._id}
              onClose={closeModal}
              onAddDelete={btnAddToFavorite}
              categoryNotice = {getCategoryNotice}
              favorite={isFavorite}
            />
          </Modal>
        </>
      )}
      <li className={scss.card_item}>
        <img src={image} alt="pet" className={scss.card_img} />
        <div className={scss.card_info}>
          <h3 className={scss.card_info_title}>{title}</h3>
          <ul className={scss.card_info_list}>
            <li className={scss.card_info_item}>
              <p className={scss.card_info_item_text}>Breed:</p>
              <p>{breed ? breed : 'no information'}</p>
            </li>
            <li className={scss.card_info_item}>
              <p className={scss.card_info_item_text}>Place:</p>
              <p>{getPlacePet()}</p>
            </li>
            <li className={scss.card_info_item}>
              <p className={scss.card_info_item_text}>Age:</p>
              <p>{getAgePet}</p>
            </li>
            {category === 'sell' && (
              <li className={scss.card_info_item}>
                <p className={scss.card_info_item_text}>Price:</p>
                <p>{price}</p>
              </li>
            )}
             <li className={scss.card_info_item}>
              <p className={scss.card_info_item_text}>Owner:</p>
              <Link to={owner._id === idUser ? '/user' :`/user/${owner._id}`} 
              onClick={() => {
                if(owner._id === idUser) {
                 return
                } else {
                  dispatch(fetchInfoUser(owner._id), fetchInfoPetUser(owner._id))
                }
                }} 
              className={scss.card_info_item_link}>{owner.name} &#8601;</Link>
             </li>
          </ul>
          <div className={scss.box_btn}>
            <button
              type="button"
              className={scss.learn_more_btn}
              onClick={showModal}
            >
              Learn more
            </button>
            {isLogin && idUser === owner._id && (
              <button
                type="button"
                className={scss.delete_btn}
                onClick={() => btnDeleteNotice(_id)}
              >
                Delete
                <SvgInsert id="icon-delete-notice" />
              </button>
            )}
            {!isFavorite && (
              <button
                type="button"
                className={scss.add_to_favorite_btn}
                onClick={() => btnAddToFavorite(_id)}
              >
                <SvgInsert id="icon-heart" />
              </button>
            )}
            {isFavorite && (
              <button
                type="button"
                className={`${scss.add_to_favorite_btn} ${scss.add_to_favorite_btn_active}`}
                onClick={() => btnAddToFavorite(_id)}
              >
                <SvgInsert id="icon-heart" />
              </button>
            )}
          </div>
          <p className={scss.card_text}>{getCategoryNotice(category)}</p>
        </div>
      </li>
    </>
    
  );
};

export default NoticeCategoryItem;
