/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { IData, IPhoto } from '../types/types';
import { API_KEY, BASE_API_URL } from 'constants/const';

// interface SearchParamsProps {
//   searchParams: () => void;
// }

const useFetchPhoto = () => {
  // const [allProd, setAllProd] = useState<IProduct[]>([]);
  // const [allPhoto, setAllPhoto] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [searchParam, setSearchParam] = useState('');

  // interface IURLParams {
  //   method: string | Record<string, string>;
  //   api_key: string | Record<string, string>;
  //   text: string | Record<string, string>;
  //   sort: string | Record<string, string>;
  //   per_page: number;
  //   license: string;
  //   extras: string;
  //   format: string;
  //   nojsoncallback: number;
  // }

  // const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=60beffd13940904f8e697fe2bdc54219&text=apple&sort=interestingness-desc&per_page=12&license=4&extras=owner_name%2Clicense&format=json&nojsoncallback=1`;
  // const url = `https://api.flickr.com/services/rest/?${parameters}`;

  async function fetchPhoto(search: string) {
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
      setError('');
      setLoading(true);
      const response = await axios.get<IData>(`${BASE_API_URL}${parameters}`);
      setLoading(false);
      console.log(response.data.photos.photo);

      return response.data.photos.photo;
    } catch (event: unknown) {
      const err = event as AxiosError;
      setLoading(false);
      setError(err.message);
      return null;
    }
  }

  return { fetchPhoto, loading, error };
};
export default useFetchPhoto;
