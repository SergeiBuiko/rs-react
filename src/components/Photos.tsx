/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import useFetchPhoto from 'hooks/useFetchPhoto';
import Photo from './Photo/Photo';
import { IPhoto, SearchValues } from 'types/types';

import './Photos.css';

const Photos = () => {
  const { register, handleSubmit } = useForm<SearchValues>();
  const { fetchPhoto, loading, error } = useFetchPhoto();
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const [input, setInput] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('searchValue') as string);
    return initialValue || '';
  });

  useEffect(() => localStorage.setItem('searchValue', JSON.stringify(input)), [input]);

  const onSubmit: SubmitHandler<SearchValues> = (data) => {
    setInput(data.search);
  };

  useEffect(() => {
    fetchPhoto(input).then((data) => {
      if (data !== null) {
        setPhotos(data);
      }
    });
  }, [input]);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Enter your request: </span>
          <input {...register('search')} className="search-field" type="text" />
          <button type="submit" className="btn-submit">
            {loading ? 'Loading...' : 'Search'}
          </button>
        </form>
      </div>
      {error && <p className="error">Error loadind</p>}
      <main className="main-content">
        {photos?.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </main>
    </div>
  );
};
export default Photos;
