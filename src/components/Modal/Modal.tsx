/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './modal.css';

interface IModalProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ modalActive, setModalActive }: IModalProps) {
  // const {} = props;

  return (
    <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
}

export default Modal;
