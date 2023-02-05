import scss from './notice-category-item.module.scss';
import noticeImage1 from 'images/dog1.webp';
import noticeImage2 from 'images/dog2.webp';
import noticeImage3 from 'images/dog3.webp';
import SvgInsert from 'components/Svg/Svg';

//імпорти
import Modal from '../ModalNotice/Modal/Modal';
import ModalNotice from '../ModalNotice/ModalNotice';

//useState
import { useState } from 'react';

const NoticeCategoryItem = () => {
  const [modalShow, setModalShow] = useState(false);

  function closeModal() {
    setModalShow(false);
    return console.log(modalShow);
  }

  const showModal = () => {
    setModalShow(true);
  };

  return (
    <ul className={scss.card_list}>
      {modalShow && (
        <>
          <Modal onClose={closeModal}>
            <ModalNotice id={1} onClose={closeModal} />
          </Modal>
        </>
      )}
      <li onClick={showModal} className={scss.card_item}>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
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
            <SvgInsert id="icon-heart" />
          </button>
          <button type="button" className={scss.learn_more_btn}>
            Learn more
          </button>
          <p className={scss.card_text}>Sell</p>
        </div>
      </li>
    </ul>
  );
};

export default NoticeCategoryItem;
