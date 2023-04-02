import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './FormPage.css';

interface UseFormInputs {
  name?: string;
  data?: string;
  country?: string;
  // lastName?: string;
}

interface IPhoto {
  photo: {
    name: string;
  };
}

const FormPage = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<IPhoto[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  // handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  // };
  const onSubmit = (data: UseFormInputs) => {
    console.log(data);
    // alert(JSON.stringify(data));
    reset();
  };

  // const file = data.selectedfile[0];
  // if (file.type != 'application/pdf') {
  //   setError('selectedfile', {
  //     type: 'filetype',
  //     message: 'Only PDFs are valid.',
  //   });
  //   return;
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpload = (e: any) => {
    const files = e.target.files[0];

    setUploadedPhotos([...uploadedPhotos, files]);
    console.log(uploadedPhotos);

    // setPhotoPreview(
    //   uploadedPhotos.map((photo) =>
    //     Object.assign(photo, {
    //       preview: URL.createObjectURL(photo),
    //     })
    //   )
    // );
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
          Send product description to e-mail:{' '}
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
            {...register('testPhotos', {
              required: 'This is required',
              validate: {
                lessThan10MB: (files) => files[0]?.size < 30000000 || 'Max size 3mb',

                acceptedFormats: (files) =>
                  ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
                  'Only PNG, JPEG e GIF',
              },
            })}
            onChange={handleUpload}
          />
          {errors.testPhotos && <p>{errors.testPhotos.message?.toString()}</p>}
        </label>
        <input className="submit__button" type="submit" value="Submit" disabled={!isValid} />
      </form>
      {/* {uploadedPhotos.map((photo, i) => (
        <p key={i}>{photo.photo.name}</p>
      ))} */}
      {/* <p>{uploadedPhotos}</p> */}
    </div>
  );
};
export default FormPage;
