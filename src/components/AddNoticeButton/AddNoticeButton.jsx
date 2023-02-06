import { useState } from 'react';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
import SvgInsert from 'components/Svg/Svg';
import scss from './add-notice-button.module.scss';
import AddsPetContent from 'components/ModalAddNotice/ModalAddNoticeForm/AddsNoticeContent';

const AddNoticeButton = () => {
  const [modalShow, setModalShow] = useState(false);

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
        <SvgInsert id="icon-add-pet" />
        Add pet
      </button>
      {modalShow && (
        <>
          <ModalAddNotice onClose={closeModal}>
            <AddsPetContent/>
          </ModalAddNotice>
        </>
      )}

    </div>
  )
}

export default AddNoticeButton;
