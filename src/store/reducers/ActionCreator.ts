import axios from 'axios';
// import { IUser } from 'components/models/IUser';
import { AppDispatch } from 'store/store';
import { userSlice } from './UseSlice';
import { IData } from 'types/types';
import { API_KEY, BASE_API_URL } from 'constants/const';

// export const fetchImage = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.useFetching());
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.useFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.useFetchingError('error'));
//     // dispatch(userSlice.actions.useFetchingError(e.message));
//   }
// };
const useFetchPhoto = () => {
  const fetchImage = (search: string) => async (dispatch: AppDispatch) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {
      method: 'flickr.photos.search',
      api_key: API_KEY,
      text: search, // Search Text
      sort: 'interestingness-desc',
      per_page: 12,
      license: '4',
      extras: 'owner_name,license',
      format: 'json',
      nojsoncallback: 1,
    };
    const parameters = new URLSearchParams(data);
    try {
      dispatch(userSlice.actions.useFetching());
      const response = await axios.get<IData>(`${BASE_API_URL}${parameters}`);
      // const response = await axios.get(
      //   `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=60beffd13940904f8e697fe2bdc54219&text=apple&sort=interestingness-desc&per_page=12&license=4&extras=owner_name%2Clicense&format=json&nojsoncallback=1`
      // );
      console.log(response);

      dispatch(userSlice.actions.useFetchingSuccess(response.data.photos.photo));
    } catch (e) {
      dispatch(userSlice.actions.useFetchingError('error'));
      // dispatch(userSlice.actions.useFetchingError(e.message));
    }
  };
  return { fetchImage };
};

export default useFetchPhoto;
