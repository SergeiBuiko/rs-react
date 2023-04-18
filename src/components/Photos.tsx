// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';

// import useFetchPhoto from 'hooks/useFetchPhoto';
import Photo from './Photo/Photo';

// import { IPhoto, SearchValues } from 'types/types';

import './Photos.css';

// const Photos = () => {
//   const { register, handleSubmit } = useForm<SearchValues>();
//   const { fetchPhoto, loading, error } = useFetchPhoto();
//   const [photos, setPhotos] = useState<IPhoto[]>([]);

//   const [input, setInput] = useState(() => {
//     const initialValue = JSON.parse(localStorage.getItem('searchValue') as string);
//     return initialValue || '';
//   });

//   useEffect(() => localStorage.setItem('searchValue', JSON.stringify(input)), [input]);

//   const onSubmit: SubmitHandler<SearchValues> = (data) => {
//     setInput(data.search);
//   };

//   useEffect(() => {
//     fetchPhoto(input).then((data) => {
//       if (data !== null) {
//         setPhotos(data);
//       }
//     });
//   }, [input]);

//   return (
//     <div className="photos__container">
//       <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <span>Enter your request: </span>
//           <input {...register('search')} className="search-field" type="text" />
//           <button type="submit" className="btn-submit">
//             {loading ? 'Loading...' : 'Search'}
//           </button>
//         </form>
//       </div>
//       {loading ? (
//         <div className="spinner-block">
//           <div className="spinner spinner-1"></div>
//         </div>
//       ) : (
//         <main className="main-content">
//           {photos?.map((photo) => (
//             <Photo key={photo.id} photo={photo} />
//           ))}
//         </main>
//       )}
//       {error && <p className="error">Error loadind</p>}
//     </div>
//   );
// };
// export default Photos;
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFetchPhoto from 'store/reducers/ActionCreator';
import { SearchValues } from 'types/types';

function Photos() {
  const { register, handleSubmit } = useForm<SearchValues>();
  const [input, setInput] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('searchValue') as string);
    return initialValue || '';
  });
  const { fetchImage } = useFetchPhoto();

  const dispatch = useAppDispatch();
  const { photo, isLoading, error } = useAppSelector((state) => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchImage());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    // fetchImage(input)((data) => {
    //   if (data !== null) {
    //     setPhotos(data);
    //   }
    // });
    dispatch(fetchImage(input));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const onSubmit: SubmitHandler<SearchValues> = (data) => {
    setInput(data.search);
  };
  return (
    // <div>
    //   {isLoading && <h1>Loading...</h1>}
    //   {error && <h1>Date not load</h1>}
    //   {JSON.stringify(photo, null, 2)}
    // </div>
    <div className="photos__container">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Enter your request: </span>
          <input {...register('search')} className="search-field" type="text" />
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
