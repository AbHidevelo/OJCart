import React from 'react';
import ReactDOM from 'react-dom/client';
import {  
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom'
 import { PayPalScriptProvider } from '@paypal/react-paypal-js';
 import { Provider } from 'react-redux'
 import store from './store'
 import { HelmetProvider } from 'react-helmet-async';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import HomePage from './displays/HomePage';
import ProductPage from './displays/ProductPage';
import KartPage from './displays/KartPage';
import LoginPage from './displays/LoginPage';
import RegisterPage from './displays/RegisterPage';
import ShippingPage from './displays/ShippingPage';
import PaymentPage from './displays/PaymentPage'; 
import PlaceOrderPage from './displays/PlaceOrderPage';
import OrderPage from './displays/OrderPage';
import ProfilePage from './displays/ProfilePage';
import OrderListPage from './displays/admin/OrderListPage';
import ProductListPage from './displays/admin/ProductListPage';
import ProductEditPage from './displays/admin/ProductEditPage';
import UserListPage from './displays/admin/UserListPage';
import UserEditPage from './displays/admin/UserEditPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index ={true} path='/' element ={<HomePage />}/>
      <Route path='/search/:keyword' element ={<HomePage />}/>
      <Route path='/page/:pageNumber' element ={<HomePage />}/>
      <Route path='/search/:keyword/page/:pageNumber' element ={<HomePage />}/>
      <Route path='/product/:id' element ={<ProductPage />}/>
      <Route path='/cart' element ={<KartPage />}/>
      <Route path='/login' element ={<LoginPage />}/>
      <Route path='/register' element ={<RegisterPage />}/>
      
      <Route path='' element={<PrivateRoute/>}>
        <Route path='/shipping' element={<ShippingPage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/placeorder' element={<PlaceOrderPage/>}/>
        <Route path='/order/:id' element={<OrderPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Route>

      <Route path='' element={<AdminRoute/>}>
        <Route path='/admin/orderList' element={<OrderListPage/>}/>
        <Route path='/admin/productList' element={<ProductListPage/>}/>
        <Route path='/admin/product/:id/edit' element={<ProductEditPage/>}/>
        <Route path='/admin/userList' element={<UserListPage/>}/>
        <Route path='/admin/user/:id/edit' element={<UserEditPage/>}/>
      </Route>
    </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
       <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router}/>
      </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);  

reportWebVitals();
