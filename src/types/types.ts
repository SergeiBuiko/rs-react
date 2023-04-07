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

// export interface IData {
//   limit: number;
//   products: IProduct[];
//   skip: number;
//   total: number;
// }

export type FormValues = {
  name: string;
  date: string;
  country: string;
  email: boolean;
  gender: string;
  photoUpload: File[];
};

export interface ICard {
  name: string;
  date: string;
  country: string;
  email: boolean;
  gender: string;
  photoUpload?: string;
}

export interface IPhotos {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: 3;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  license: string;
  ownername: string;
}

export interface IData {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IPhotos[];
}
