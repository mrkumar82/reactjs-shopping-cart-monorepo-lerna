import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addItem, removeItem, cart }) => {
  const { id, thumbnail, title, description, price } = product;
  const [productCount, setProductCount] = useState(0);
  const quanity = cart?.find((item) => item.id === id);

  const addtoCart = () => {
    addItem(product);
  };
  const removeFromCart = () => {
    removeItem(product);
  };
  return (
    <div className='item'>
      <div className='item-content'>
        <div className='img-wrap'>
          <Link to={`/product/${id}`}>
            <img width='220' src={thumbnail} alt={title} />
          </Link>
        </div>
        <div className='details'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className='price-quantity'>
        <h2>$ {price} </h2>
        <div className='buttons prod'>
          <i className='bi bi-dash-lg' onClick={removeFromCart}></i>
          <div data-qty='${qty}' className={`quantity-{id}`}>
            {quanity === undefined ? 0 : quanity.qty}
          </div>
          <i className='bi bi-plus-lg' onClick={addtoCart}></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
