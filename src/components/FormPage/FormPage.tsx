import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, ICard } from 'types/types';

import './FormPage.css';

const FormPage = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setCards([
      ...cards,
      {
        ...data,
        photoUpload: `${URL.createObjectURL(data.photoUpload[0])}`,
      },
    ]);

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
              validate: {
                lessThan10MB: (files) => files[0].size < 3145728 || 'Max size 3mb',

                acceptedFormats: (files) =>
                  ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
                  'Only PNG, JPEG e GIF',
              },
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
                Name: <span>{el.name}</span>
              </p>
              <p>
                Date: <span>{el.date}</span>
              </p>
              <p>
                Country: <span>{el.country}</span>
              </p>
              {el.email && (
                <p>
                  <span>Send product description to e-mail: yes </span>
                </p>
              )}
              <p>
                Gender: <span>{el.gender}</span>
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
