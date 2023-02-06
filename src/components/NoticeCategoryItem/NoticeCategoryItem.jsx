import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { formatDistanceStrict } from 'date-fns';

import scss from './notice-category-item.module.scss';
import noticeImage1 from 'images/cat1.webp';
import SvgInsert from 'components/Svg/Svg';
import {
  addNoticeToFavorite,
//   deleteNotice,
} from 'redux/notices/notices-operation';
// import { getFavoriteNotice } from "redux/notices/notices-selectors";
// import { isLogin } from "redux/auth/auth-selectors";
import Modal from '../ModalNotice/Modal/Modal';
import ModalNotice from '../ModalNotice/ModalNotice';

const NoticeCategoryItem = pet => {
  const [modalShow, setModalShow] = useState(false);

  function closeModal() {
    setModalShow(false);
    return console.log(modalShow);
  }

//   const showModal = () => {
//     setModalShow(true);
//   };

  const { _id, title, breed, place, birthday, price, category } = pet.pet;


// const isAuth = useSelector(isLogin);
  const dispatch = useDispatch();

//     const btnDeleteNotice = (noticeId) => {
//      dispatch(deleteNotice(noticeId));
//     }


  const btnAddToFavorite = noticeId => {
    dispatch(addNoticeToFavorite(noticeId));
  };


  const getAgePet = formatDistanceStrict(new Date(), new Date(birthday));

  const getPlacePet = () => {
    const result = place.split(' ');
    return result[0];
  };

  return (
    <>
      {modalShow && (
        <>
          <Modal onClose={closeModal}>
            <ModalNotice id={1} onClose={closeModal} />
          </Modal>
        </>
      )}
      <li className={scss.card_item}>
        <img src={noticeImage1} alt="pet" className={scss.card_img} />
        <div className={scss.card_info}>
          <h3 className={scss.card_info_title}>{title}</h3>
          <ul className={scss.card_info_list}>
            <li className={scss.card_info_item}>
              Breed: {breed ? breed : 'no information'}
            </li>
            <li className={scss.card_info_item}>Place: {getPlacePet()}</li>
            <li className={scss.card_info_item}>Age: {getAgePet}</li>
            {category === 'sell' && (
              <li className={scss.card_info_item}>Price: {price}$</li>
            )}
          </ul>
          <div className={scss.box_btn}>
            <button type="button" className={scss.learn_more_btn}>
              Learn more
            </button>
            {/* {isAuth && <button type="button" className={scss.delete_btn} onClick={() => btnDeleteNotice(_id)}>Delete
                            <SvgInsert id="icon-delete"/>
                        </button>}  */}
            <button
              type="button"
              className={scss.add_to_favorite_btn}
              onClick={() => btnAddToFavorite(_id)}
            >
              <SvgInsert id="icon-heart" />
            </button>
          </div>
          <p className={scss.card_text}>{category}</p>
        </div>
      </li>

      {/* <li className={scss.card_item}>
                <img src={noticeImage2} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage3} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage1} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage2} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage3} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage1} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage2} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li> */}
    </>
  );
};

export default NoticeCategoryItem;
