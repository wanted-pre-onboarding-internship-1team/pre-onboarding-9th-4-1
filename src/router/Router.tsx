import Mainpage from '../pages/Mainpage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
    </Routes>
  );
}
