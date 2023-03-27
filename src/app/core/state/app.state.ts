import { ActionReducerMap } from '@ngrx/store';
import { SessionState } from '../../models/session.state';
import { sessionReducer } from './session/session.reducers';
import { cartReducer } from './cart/cart.reducers';
import { CartItem } from '../../models/cart.state';

export interface AppState {
  session: SessionState;
  cart: CartItem[];
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  session: sessionReducer,
  cart: cartReducer,
}
