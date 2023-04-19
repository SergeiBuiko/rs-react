export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
  inCart?: boolean;
}

export type FormValues = {
  name: string;
  date: string;
  country: string;
  email: boolean;
  gender: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  photoUpload: string;
};

export type SearchValues = {
  search: string;
};

export interface ICard {
  name: string;
  date: string;
  country: string;
  email: boolean;
  gender: string;
  photoUpload?: string;
}

export interface IPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  license: string;
  ownername: string;
}

export interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IPhoto[];
}

export interface IData {
  photos: IPhotos;
}

export interface IModalProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  photo?: IPhoto;
}
