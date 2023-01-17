import React from 'react';
import CartList from './CartList';
import { useStore } from '@mono/store';

const Cart = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div className='container cart-page'>
      {cart.map((item) => (
        <CartList key={item.id} cart={item} />
      ))}
    </div>
  );
};

export default Cart;
