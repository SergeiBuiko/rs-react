import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from 'types/types';

import './FormPage.css';
import { useAppSelector } from 'hooks/redux';
import { pushFormData } from 'store/reducers/fromSlice';
import { useDispatch } from 'react-redux';

const FormPage = () => {
  const [file, setFile] = useState('');
  const dispatch = useDispatch();
  const { cards } = useAppSelector((state) => state.formPageSlice);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onBlur' });

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (ev: ProgressEvent<FileReader>) => {
      setFile(ev.target?.result as string);
    });

    reader.readAsDataURL(file);
  };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    dispatch(
      pushFormData({
        value: { ...data, photoUpload: file },
      })
    );

    reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label className="form__label">
          <span>Product name: </span>
          <input
            type="text"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 5, message: 'min length 5' },
              pattern: { value: /[A-Za-z]{3}/, message: 'The name must contain letters' },
            })}
          />
          <p style={{ color: 'red' }}>{errors.name?.message?.toString()}</p>
        </label>
        <label>
          <span>Production date: </span>
          <input
            type="date"
            {...register('date', {
              required: 'This is required',
            })}
          />
          <p style={{ color: 'red' }}>{errors.date?.message?.toString()}</p>
        </label>
        <label>
          <span>Country of manufacture: </span>
          <select
            {...register('country', {
              required: 'This is required',
            })}
          >
            <option value="">--select country--</option>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <p style={{ color: 'red' }}>{errors.country?.message?.toString()}</p>
        <label>
          Send product description to e-mail:
          <input
            type="checkbox"
            {...register('email', {
              required: 'This is required',
            })}
          />
          <p style={{ color: 'red' }}>{errors.email?.message?.toString()}</p>
        </label>

        <label htmlFor="radio-male">
          products for men:
          <input
            type="radio"
            value="male"
            {...register('gender', {
              required: 'This is required',
            })}
            name="gender"
            id="radio-male"
          />
        </label>
        <label htmlFor="radio-female">
          products for woman:
          <input
            type="radio"
            value="female"
            {...register('gender', {
              required: 'This is required',
            })}
            name="gender"
            id="radio-female"
          />
        </label>

        <label>
          <span>Upload file: </span>
          <input
            type="file"
            {...register('photoUpload', {
              required: 'This is required',
              onChange: handleFile,
            })}
          />
          {errors.photoUpload && (
            <p style={{ color: 'red' }}>{errors.photoUpload.message?.toString()}</p>
          )}
        </label>
        <input className="submit__button" type="submit" value="Submit" disabled={!isValid} />
      </form>
      <div className="cards-container">
        {cards.map((el, i) => {
          return (
            <div className="created-card" key={i}>
              <p>
                <span className="card-caption">Name: </span> <span>{el.name}</span>
              </p>
              <p>
                <span className="card-caption">Date: </span>
                <span>{el.date}</span>
              </p>
              <p>
                <span className="card-caption">Country: </span>
                <span>{el.country}</span>
              </p>
              {el.email && (
                <p>
                  <span className="card-caption">Send product description to e-mail: </span>
                  <span> yes </span>
                </p>
              )}
              <p>
                <span className="card-caption">Gender: </span>
                <span>{el.gender}</span>
              </p>
              <img src={el.photoUpload} className="upload-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FormPage;
