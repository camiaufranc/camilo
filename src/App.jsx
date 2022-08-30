import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import CartProvider from './Context/CartContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:productoId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
