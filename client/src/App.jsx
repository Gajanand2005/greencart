import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import AllProduct from './pages/AllProduct';
import ProductCategory from './pages/ProductCategory';

import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/Appcontext';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrder from './pages/MyOrder';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import Order from './pages/seller/Order';


const App = () => {
  const isSellerPath = useLocation().pathname.startsWith('/seller');
  const { showUserLogin, isSeller} = useAppContext();
  return (
    <div className="app-container text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <main className="main-content">
        <div className={`${isSellerPath ? " " : 'px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24'} dark:bg-gray-900`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<AllProduct />} />
            <Route path='/products/:category' element={<ProductCategory />} />
            <Route path='/products/:category/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/add-address' element={<AddAddress />} />
            <Route path='/my-orders' element={<MyOrder />} />
            <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}>
              <Route index element={<AddProduct />} />
              <Route path='product-list' element={<ProductList />} />
              <Route path='order' element={<Order />} />
            </Route>
          </Routes>
        </div>
        
      </main>
    </div>
  );
};

export default App;
