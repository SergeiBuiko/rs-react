export interface IProduct {
  product: {
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
  }[];
}

export interface ISearchBar {
  inputValue: string;
}
