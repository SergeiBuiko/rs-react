import React from 'react';
import './modal.css';
import { IModalProps } from 'types/types';

function Modal({ photo, modalActive, setModalActive }: IModalProps) {
  return (
    <div
      className={modalActive ? 'modal active_modal' : 'modal'}
      onClick={() => setModalActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          src={`https://live.staticflickr.com/${photo?.server}/${photo?.id}_${photo?.secret}.jpg`}
          alt="product_image"
          className="modal__image"
        />
        <p className="modal__info">
          <span className="modal_title">Title: </span>
          {photo?.title}
        </p>
        <div className="modal__close" onClick={() => setModalActive(false)}>
          ×
        </div>
      </div>
    </div>
  );
}

export default Modal;
