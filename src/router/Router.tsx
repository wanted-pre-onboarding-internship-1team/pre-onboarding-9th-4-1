import Layout from '../component/common/Layout';
import Mainpage from '../pages/Mainpage';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Mainpage />} />
      </Route>
    </Routes>
  );
}
