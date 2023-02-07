import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { formatDistanceStrict } from 'date-fns';
import { Notify } from 'notiflix';
import scss from './add-notice-button.module.scss';
import SvgInsert from 'components/Svg/Svg';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
import useAuth from 'shared/hooks/useAuth';
import { getUserId } from 'redux/selectors';
import AddsPetContent from 'components/ModalAddNotice/ModalAddNoticeForm/AddsNoticeContent';

const AddNoticeButton = () => {
  const [modalShow, setModalShow] = useState(false);
// const isLogin = useAuth();
// const dispach = useDispatch;
// const userId = useSelector(getUserId)
// const addNotice = (noticeId) => {
//   if(isLogin) {
//     return dispatchEvent(addNotice(noticeId));
//   }
//   Notify.failure("You need authorization")
// }
  const closeModal = () => {
    setModalShow(false);
  };

  const showModal = () => {
    setModalShow(true);
  };

  return (
    <div className={scss.cont}>
      <button
        className={scss.button}
        type="button"
        onClick={showModal}
      >
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
