import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IData, IPhotos } from '../types/types';

export function useProducts() {
  // const [allProd, setAllProd] = useState<IProduct[]>([]);
  const [allPhoto, setAllPhoto] = useState<IPhotos[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const yourApiKey = '60beffd13940904f8e697fe2bdc54219';

  // interface IDatas {
  //   method: string | Record<string, string>;
  //   api_key: string | Record<string, string>;
  //   text: string | Record<string, string>;
  //   sort: string | Record<string, string>;
  //   per_page: number | Record<number, string>;
  //   license: string | Record<string, string>;
  //   extras: string | Record<string, string>;
  //   format: string | Record<string, string>;
  //   nojsoncallback: number | Record<number, number>;
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const data: any = {
  //   method: 'flickr.photos.search',
  //   api_key: yourApiKey,
  //   text: 'cat', // Search Text
  //   sort: 'interestingness-desc',
  //   per_page: 12,
  //   license: '4',
  //   extras: 'owner_name,license',
  //   format: 'json',
  //   nojsoncallback: 1,
  // };

  // const parameters = new URLSearchParams(data);

  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=60beffd13940904f8e697fe2bdc54219&text=cat&sort=interestingness-desc&per_page=12&license=4&extras=owner_name%2Clicense&format=json&nojsoncallback=1`;

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);

      // console.log(url);

      const response = await axios.get<IData>(url);

      setAllPhoto(response.data.photo);

      setLoading(false);
    } catch (event: unknown) {
      const err = event as AxiosError;
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { allPhoto, loading, error };
}
