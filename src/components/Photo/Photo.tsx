import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { IPhoto } from 'types/types';
import './photo.css';

interface IPhotoProps {
  photo: IPhoto;
}

function Photo({ photo }: IPhotoProps) {
  const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <div className="product-card" onClick={() => setModalActive(!modalActive)}>
      <img
        src={`https://live.staticflickr.com/${photo?.server}/${photo?.id}_${photo?.secret}.jpg`}
        alt="product_image"
        className="product__image"
      />
      <p>
        <span className="section_title">Title: </span>
        {photo?.title}
      </p>
      <Modal modalActive={modalActive} setModalActive={setModalActive} photo={photo} />
    </div>
  );
}

export default Photo;
