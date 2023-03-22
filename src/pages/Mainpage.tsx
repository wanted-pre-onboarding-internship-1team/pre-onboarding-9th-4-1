import AdminBody from '../component/AdminBody';
import AdminFooter from '../component/AdminFooter';
import AdminHeader from '../component/AdminHeader';
import ProductProvider from '../contexts/TableContext';
import { Suspense } from 'react';

export default function Mainpage() {
  return (
    <ProductProvider>
      <Suspense fallback={<div>로딩중...</div>}>
        <AdminHeader />
        <AdminBody />
        <AdminFooter />
      </Suspense>
    </ProductProvider>
  );
}
