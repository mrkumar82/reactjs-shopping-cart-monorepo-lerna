import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@mono/store';

const Header = ({ state }) => {
  const cart = useStore((state) => state.cart);
  const cartStorage = JSON.parse(localStorage.getItem('cart')).state.cart || [];
  const totalQuantity = () => {
    return cartStorage
      .map((item) => item.qty)
      .reduce((acc, value) => acc + value, 0);
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <h2>Spray & Cream</h2>
        <p>Reactjs mf-shopping cart app & Zustand</p>
      </Link>

      <Link to='/cart' className='show-cart'>
        <i className='bi bi-cart2'></i>
        <div id='cartAmount' className='cartAmount'>
          {totalQuantity()}
        </div>
      </Link>
    </div>
  );
};

export default Header;
