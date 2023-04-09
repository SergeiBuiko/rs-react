// import Photo from 'components/Photos';
// import Product from 'components/Photos';

import Photos from 'components/Photos';
// import SearchBar from 'components/SearchBar';
import React from 'react';
interface IModalProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export function MainPage({ modalActive, setModalActive }: IModalProps) {
  return (
    <div>
      {/* <SearchBar /> */}
      <h1>Current search list</h1>
      <Photos modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
}
