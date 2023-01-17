import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useStore } from '@mono/store';

import './index.scss';

const ProductList = () => {
  const state = useStore((state) => state);
  const cart = useStore((state) => state.cart);
  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);

  const [data, setData] = useState([]);
  const fetchProducts = async () => {
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();
    setData(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!data.length) return <div className='container'>Loading...</div>;

  return (
    <div className='container'>
      <div className='product-list'>
        {data &&
          data.map((product) => (
            <Product
              key={product.id}
              product={product}
              addItem={addItem}
              removeItem={removeItem}
              cart={cart}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
