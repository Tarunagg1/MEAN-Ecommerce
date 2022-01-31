import { CartItem } from './cartitem';

export interface CartState {
  cartItems: CartItem[];
}

export const initialState = { cartItems: [] };
