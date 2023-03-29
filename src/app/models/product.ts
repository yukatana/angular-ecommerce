export interface Product {
  _id: string;
  name: string;
  category: string;
  description?: string;
  thumbnail: string;
  price: number;
  stock: number;
}
