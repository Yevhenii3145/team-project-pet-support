// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import scss from './add-notice-button.module.scss';
import SvgInsert from 'components/Svg/Svg';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
import useAuth from 'shared/hooks/useAuth';
import AddsPetContent from 'components/ModalAddNotice/ModalAddNoticeForm/AddsNoticeContent';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const AddNoticeButton = () => {
  const [modalShow, setModalShow] = useState(false);
const isLogin = useAuth();

  const closeModal = () => {
    document.body.style.overflow = 'visible';
    setModalShow(false);
  };

  const showModal = () => {

    if(isLogin){
      setModalShow(true);
      document.body.style.overflow = 'hidden';
    } else{
      Notify.failure("You need authorization");
    }
  }

  return (
    <div className={scss.cont}>
      <button className={scss.button} type="button" onClick={showModal}>
        <SvgInsert id="icon-add-notice" />
        Add pet
      </button>
      {modalShow && (
        <>
          <ModalAddNotice onClose={closeModal}>
            <AddsPetContent />
          </ModalAddNotice>
        </>
      )}

    </div>
  )
}

export default AddNoticeButton;
