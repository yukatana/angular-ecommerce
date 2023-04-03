import { CartItem } from './cart.state';

export interface Purchase {
  cart: CartItem[];
  purchasedAt: Date;
  cost: number;
}
