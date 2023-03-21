import { useState } from 'react';
import scss from './add-notice-button.module.scss';
import SvgInsert from 'components/utilsFolder/Svg/Svg';
import ModalAddNotice from 'components/noticesFolder/ModalAddNotice/ModalAddNotice';
import useAuth from 'redux/utils/useAuth';
import AddsNoticeContent from 'components/noticesFolder/ModalAddNotice/ModalAddNoticeForm/AddsNoticeContent';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const AddNoticeButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const isLogin = useAuth();

  const closeModal = () => {
    document.body.style.overflow = 'visible';
    setModalShow(false);
  };

  const showModal = () => {
    if (isLogin) {
      setModalShow(true);
      document.body.style.overflow = 'hidden';
    } else {
      Notify.failure('You need authorization', 
      { distance: '100px',
        opacity: '0.8',
        useIcon: false,
        fontSize: '18px',
        borderRadius: '20px',
        showOnlyTheLastOne: true});
    }
  };

  return (
    <>
      <button className={scss.button} type="button" onClick={showModal}>
        <SvgInsert id="icon-add-notice" />
        Add pet
      </button>
      {modalShow && (
        <>
          <ModalAddNotice onClose={closeModal}>
            <AddsNoticeContent />
          </ModalAddNotice>
        </>
      )}
    </>
  );
};

export default AddNoticeButton;
