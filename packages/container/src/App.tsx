import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom';
// import RemoteProducts from 'products/ProductsList';
// import RemoteHeader from 'header/Header';
// import RemoteFooter from 'header/Footer';
import NoMatch from './NoMatch';
// import { useStore, ContextStore } from 'store/ContextStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '@mono/header';
import { ProductList } from '@mono/products';
import { Cart } from '@mono/cart';
import { ProductDetail } from '@mono/pdp';

import './index.scss';

const App = () => {
  const [state, dispatch] = useState();

  return (
    <div className='text-3xl mx-auto max-w-12xl'>
      <BrowserRouter>
        <Header state={state} />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('app')
);
