import { TestBed } from '@angular/core/testing';
import { CartItem } from './cartitem';
import { CartState, initialState } from './cartstate';
import { CartStore } from './cartstore';

describe('CartStore', () => {
  let cartStoreObj: CartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartStore],
    });
    cartStoreObj = TestBed.get(CartStore);
  });

  it('should create a new inctance', () => {
    expect(cartStoreObj).toBeTruthy();
  });

  it('can add item into cart state', () => {
    const currentState = initialState;
    expect(currentState.cartItems.length).toBe(0);

    const cartitem: CartItem = {
      productId: 1,
      price: 100,
      name: 'apple',
      imageUrl: 'lji',
      quantity: 10,
      itemTotal: 1000,
    };

    cartStoreObj.addCartItem(cartitem);

    const expectedState = {
      cartItems: [cartitem],
    };

    expect(cartStoreObj.state).toEqual(expectedState);
  });

  it('it can clear cart state', () => {
    const cartitem: CartItem = {
      productId: 1,
      price: 100,
      name: 'apple',
      imageUrl: 'lji',
      quantity: 10,
      itemTotal: 1000,
    };

    cartStoreObj.addCartItem(cartitem);

    const currentState = {
      cartItems: [cartitem],
    };

    expect(cartStoreObj.state).toEqual(currentState);
    cartStoreObj.clearCart();
    expect(cartStoreObj.state).toEqual(initialState);
  });

  it('it can restore cart state', () => {
    const currentState = initialState;
    expect(cartStoreObj.state).toEqual(initialState);

    const cartitem: CartItem = {
      productId: 1,
      price: 100,
      name: 'apple',
      imageUrl: 'lji',
      quantity: 10,
      itemTotal: 1000,
    };

    const expectedStore: CartState = {
      cartItems: [cartitem],
    };

    cartStoreObj.restore(expectedStore);

    expect(cartStoreObj.state).toEqual(expectedStore);
  });

  it('it can remove cart item', () => {
    const currentState = initialState;
    expect(cartStoreObj.state).toEqual(initialState);

    const cartitem: CartItem = {
      productId: 1,
      price: 100,
      name: 'apple',
      imageUrl: 'lji',
      quantity: 10,
      itemTotal: 1000,
    };

    cartStoreObj.addCartItem(cartitem);

    const expectedStore: CartState = {
      cartItems: [cartitem],
    };

    expect(cartStoreObj.state).toEqual(expectedStore);

    cartStoreObj.removeCartItem(cartitem);

    expect(cartStoreObj.state).toEqual(initialState);
  });

  it('it can update cart item', () => {
    const currentState = initialState;
    expect(cartStoreObj.state).toEqual(currentState);

    const cartitem: CartItem = {
      productId: 1,
      price: 100,
      name: 'apple',
      imageUrl: 'lji',
      quantity: 10,
      itemTotal: 1000,
    };

    const cartitem2: CartItem = {
      productId: 2,
      price: 100,
      name: 'orange',
      imageUrl: 'lji',
      quantity: 10,
      itemTotal: 1000,
    };

    cartStoreObj.addCartItem(cartitem);
    cartStoreObj.addCartItem(cartitem2);

    const expectedStore: CartState = {
      cartItems: [cartitem, cartitem2],
    };

    expect(cartStoreObj.state).toEqual(expectedStore);

    const updatedCartItem: CartItem = {
      productId: 1,
      price: 100,
      name: 'apple',
      imageUrl: 'lji',
      quantity: 20,
      itemTotal: 2000,
    };

    cartStoreObj.updateCartItem(updatedCartItem);

    const expectedUpdatedStore: CartState = {
      cartItems: [updatedCartItem, cartitem2],
    };

    expect(cartStoreObj.state).toEqual(expectedUpdatedStore);
  });
});
