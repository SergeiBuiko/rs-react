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
