import { Injectable } from '@angular/core';
import { Store } from '@core/store';
import { CartItem } from './cartitem';
import { CartState, initialState } from './cartstate';

@Injectable({ providedIn: 'root' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(initialState);
  }

  addCartItem(cartTtemToAdded: CartItem) {
    const netState = {
      ...this.state,
      cartItems: [].concat(this.state.cartItems, cartTtemToAdded),
    };
    this.setState(netState);
  }

  clearCart() {
    this.setState(initialState);
  }

  restore(newState: CartState) {
    this.setState(newState);
  }

  removeCartItem(cartitemtoBeremoved: CartItem) {
    const netState = {
      ...this.state,
      cartItems: this.state.cartItems.filter(
        (e) => e.productId !== cartitemtoBeremoved.productId
      )
    };
    this.setState(netState);
  }

  updateCartItem(updatedCartItem: CartItem) {
    const netState = {
      ...this.state,
      cartItems: this.state.cartItems.map((e) =>
        e.productId === updatedCartItem.productId ? updatedCartItem : e
      )
    };
    console.log(netState);
    
    this.setState(netState);
  }

}
