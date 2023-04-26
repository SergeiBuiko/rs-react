/* eslint-disable react-hooks/exhaustive-deps */
import Photo from './Photo/Photo';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFetchPhoto from 'store/reducers/ActionCreator';
import { setSearchValue } from 'store/reducers/UseSlice';
import { SearchValues } from 'types/types';

import './Photos.css';

function Photos() {
  const { register, handleSubmit } = useForm<SearchValues>();
  const { fetchImage } = useFetchPhoto();

  const dispatch = useAppDispatch();
  const { photo, isLoading, error, searchValue } = useAppSelector((state) => state.userReducer);
  const [input, setInput] = useState(searchValue);

  useEffect(() => {
    dispatch(fetchImage(searchValue));
  }, [searchValue]);

  console.log(searchValue);

  const onSubmit: SubmitHandler<SearchValues> = () => {
    dispatch(setSearchValue({ value: input }));
  };

  return (
    <div className="photos__container">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Enter your request: </span>
          <input
            {...register('search')}
            className="search-field"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit" className="btn-submit">
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>
      </div>
      {isLoading ? (
        <div className="spinner-block">
          <div className="spinner spinner-1"></div>
        </div>
      ) : (
        <main className="main-content">
          {photo?.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </main>
      )}
      {error && <p className="error">Error loadind</p>}
    </div>
  );
}

export default Photos;
