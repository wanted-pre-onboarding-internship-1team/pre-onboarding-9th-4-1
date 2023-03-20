import Mainpage from '../pages/Mainpage';
import OrderPage from '../pages/OrderPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/order' element={<OrderPage />} />
    </Routes>
  );
}
