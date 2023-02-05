import scss from './modal-notice.module.scss';
import SvgInsert from '../Svg/Svg';

import { useDispatch, useSelector } from 'react-redux';
// import operations from '../../redux/operations';
// import Loader from 'components/Loader/Loader';

const notices = [
  {
    id: 1,
    category: 'for sale',
    title: 'The dog is looking for home',
    name: 'Rich',
    birthday: '22.04.16',
    breed: 'dachshund',
    location: 'Odessa',
    theSex: 'girl',
    email: 'user@example.com',
    phone: '+3800000000',
    comments: 'The best pet ever',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*',
    price: '150$',
  },
];

const ModalNotice = ({ id, onClose }) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
  //робимо запит до бекенду по ід яке нам передали...
  const notice = notices.find(one => one.id === id);
//   const notice = dispatch(operations.searchNotice(id))
  console.log(notice);

  const handleClickFavorite = id => {
    console.log('added to favorite', id);
  };

  return (
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
          <span className={scss.modal_notice__category}>{notice.category}</span>
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
                {notice.birthday}
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
                {notice.theSex}
              </p>
            </li>
            <li className={scss.modal_notice__item}>
              <h4 className={scss.modal_notice__item_title}>Email:</h4>
              <p className={scss.modal_notice__item_description}>
                {notice.email}
              </p>
            </li>
            <li className={scss.modal_notice__item}>
              <h4 className={scss.modal_notice__item_title}>Phone:</h4>
              <p className={scss.modal_notice__item_description}>
                {notice.phone}
              </p>
            </li>
            <li className={scss.modal_notice__item}>
              <h4 className={scss.modal_notice__item_title}>Price:</h4>
              <p className={scss.modal_notice__item_description}>
                {notice.price}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <article className={scss.modal_notice__item_comment}>
        <span className={scss.modal_notice__item_title}>Comments:</span>
        {notice.comments}
      </article>
      <div className={scss.modal_notice__button_container}>
        <button
          className={`${scss.button__primary_main} ${scss.modal_notice__button}`}
          type="button"
        >
          <a
            className={scss.modal_notice__button_contact}
            href={`tel:+${notice.phone}`}
          >
            Contact
          </a>
        </button>
        <button
          onClick={()=>{handleClickFavorite(notice.id)}}
          className={`${scss.button__primary_not_main} ${scss.modal_notice__button}`}
          type="button"
        >
          Add to <SvgInsert className={scss.modal_notice__button_favorite} id='icon-heart-favorite'/>
        </button>
      </div>
    </div>
  );
};

export default ModalNotice;
