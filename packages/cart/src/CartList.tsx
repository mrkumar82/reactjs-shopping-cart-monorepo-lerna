import React, { useState } from 'react';
import { useStore } from '@mono/store';

const CartList = ({ cart }) => {
  const { thumbnail, title, description, price, id, qty } = cart;

  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);

  const [productCount, setProductCount] = useState(0);
  const addtoCart = () => {
    addItem(cart);
  };
  const removeFromCart = () => {
    removeItem(cart);
  };

  return (
    <div className='item'>
      <div className='item-content'>
        <div className='img-wrap'>
          <img src={thumbnail} alt={title} />
        </div>
        <div className='details'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className='price-quantity'>
          <h2>$ {price * qty} </h2>
          <div className='buttons prod'>
            <i
              className='bi bi-dash-lg'
              data-id={id}
              onClick={removeFromCart}
            ></i>
            <div data-qty='${qty}' className={`quantity-{id}`}>
              {qty}
            </div>
            <i className='bi bi-plus-lg' data-id={id} onClick={addtoCart}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
