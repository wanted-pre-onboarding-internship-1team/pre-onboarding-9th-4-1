import AdminBody from '../component/AdminBody';
import AdminFooter from '../component/AdminFooter';
import AdminHeader from '../component/AdminHeader';
import ProductProvider from '../contexts/TableContext';

export default function Mainpage() {
  return (
    <ProductProvider>
      <AdminHeader />
      <AdminBody />
      <AdminFooter />
    </ProductProvider>
  );
}
