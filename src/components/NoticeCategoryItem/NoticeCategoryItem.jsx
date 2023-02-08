import {useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { formatDistanceStrict } from 'date-fns';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import scss from './notice-category-item.module.scss';
// import noticeImage1 from 'images/cat1.webp';
import SvgInsert from 'components/Svg/Svg';
import { addNoticeToFavorite, deleteNotice } from 'redux/notices/notices-operation';
// import { getFavoriteNotice } from "redux/notices/notices-selectors";
import useAuth from 'shared/hooks/useAuth';
import Modal from '../ModalNotice/Modal/Modal';
import ModalNotice from '../ModalNotice/ModalNotice';
import { getUserId } from 'redux/selectors';

const NoticeCategoryItem = ({ pet }) => {

    const { _id, image, title, breed, location, birthday, price, category, owner } = pet;

    const [modalShow, setModalShow] = useState(false);

    const isLogin = useAuth();
    const dispatch = useDispatch();
    // const user = useSelector(getUser);
    const userId = useSelector(getUserId);
    // console.log(user.userId)
    console.log(userId)

    const btnAddToFavorite = (noticeId) => {
        if (isLogin) {
            return dispatch(addNoticeToFavorite(noticeId));
        }
        Notify.failure("You need authorization");
    }

    function closeModal() {
        setModalShow(false);
        return console.log(modalShow);
    }

//   const showModal = () => {
//     setModalShow(true);
//   };

    const getPlacePet = () => {
        const result = location.split(", ");
        return result[0]
    }
    const btnDeleteNotice = (noticeId) => {
     dispatch(deleteNotice(noticeId));
    }

    const getAgePet = formatDistanceStrict(new Date(), new Date(birthday));

    return (
        <>
            {modalShow && (
            <>
                <Modal onClose={closeModal}>
                    <ModalNotice id={1} onClose={closeModal} />
                </Modal>
            </>
      )}
            <li className={scss.card_item} >
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
                        {category === "sell" && <li className={scss.card_info_item}>
                            <p className={scss.card_info_item_text}>Price:</p>
                            <p>{price}$</p>
                        </li>}
                    </ul>
                    <div className={scss.box_btn}>
                        <button type="button" className={scss.learn_more_btn} >Learn more</button>
                        {isLogin && userId === owner && <button type="button" className={scss.delete_btn} onClick={() => btnDeleteNotice(_id)}>Delete
                            <SvgInsert id="icon-delete-notice"/>
                        </button>}
                        <button type="button" className={scss.add_to_favorite_btn} onClick={() => btnAddToFavorite(_id)}>
                            <SvgInsert id="icon-heart" />
                        </button>
                    </div>
                    <p className={scss.card_text}>{category}</p>
                </div>
            </li>
        </>
    )
}

export default NoticeCategoryItem;
