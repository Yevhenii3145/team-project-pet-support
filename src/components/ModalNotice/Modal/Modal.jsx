import scss from './modal.module.scss';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  console.log(onClose);
  useEffect(() => {
    const handleDownInEscape = e => {
      if (e.code === 'Escape') {
        onClose();
        console.log('close in Escape');
      }
    };
    console.log('modal open');
    window.addEventListener('keydown', handleDownInEscape);
    return () => {
      return window.removeEventListener('keydown', handleDownInEscape);
    };
  }, [onClose]);

  const handleDown = e => {
    console.log(e.currentTarget === e.target);
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={scss.modal} onClick={handleDown}>
      <div className={scss.modal__section}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
