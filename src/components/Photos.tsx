/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useDebounceValue from 'hooks/useDebounceValue';
import useFetchPhoto from 'hooks/useFetchPhoto';
import { IPhoto } from 'types/types';

import './Photos.css';
interface IModalProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
// import { useSearchParams } from 'react-router-dom';

const Photos = ({ setModalActive }: IModalProps) => {
  // const [searchParams] = useSearchParams();

  // const findInfo = searchParams.get('info');

  const { fetchPhoto, loading, error } = useFetchPhoto();
  const [photos, setPhotos] = useState<IPhoto[] | null>([]);

  const [input, setInput] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('searchValue') as string);
    return initialValue || '';
  });

  const debouncedSearch = useDebounceValue(input, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => localStorage.setItem('searchValue', JSON.stringify(input)), [input]); // засетить серч папраметры в адресную строку

  useEffect(() => {
    fetchPhoto(input).then((data) => setPhotos(data));
  }, [debouncedSearch]);

  return (
    <div>
      <div>
        <label>
          Enter your request:
          <input className="search-field" type="text" value={input} onChange={handleChange} />
        </label>
      </div>
      {error && <p>Error loadind</p>}
      {loading && <p>Loading...</p>}
      <main className="main-content">
        {photos?.map((photo) => (
          <div key={photo.id} className="product-card" onClick={() => setModalActive(true)}>
            <img
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt="product_image"
              className="product__image"
            />
            <p>
              <span className="section_title">Title: </span>
              {photo.title}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Photos;
