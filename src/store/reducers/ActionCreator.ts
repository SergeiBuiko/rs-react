import axios from 'axios';
import { AppDispatch } from 'store/store';
import { photoSlice } from './UseSlice';
import { IData } from 'types/types';
import { API_KEY, BASE_API_URL } from 'constants/const';

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
      dispatch(photoSlice.actions.useFetching());
      const response = await axios.get<IData>(`${BASE_API_URL}${parameters}`);
      dispatch(photoSlice.actions.useFetchingSuccess(response.data.photos.photo));
    } catch (e) {
      dispatch(photoSlice.actions.useFetchingError('error'));
    }
  };
  return { fetchImage };
};

export default useFetchPhoto;
