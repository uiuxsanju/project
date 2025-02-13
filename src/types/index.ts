export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'men' | 'women' | 'kids';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  email: string;
  password: string;
}