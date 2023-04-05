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

export interface IData {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

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
