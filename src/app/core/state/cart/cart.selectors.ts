import { AppState } from '../app.state';
import { CartItem } from '../../../models/cart.state';

export const cartSelector = (state: AppState): CartItem[] => {
  return state.cart
}
