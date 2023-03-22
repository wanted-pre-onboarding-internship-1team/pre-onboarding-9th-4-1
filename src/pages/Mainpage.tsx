import AdminBody from '../component/AdminBody';
import AdminFooter from '../component/AdminFooter';
import AdminHeader from '../component/AdminHeader';
import { AdminDataProvider } from '../context/AdminContext';

export default function Mainpage() {
  return (
    <AdminDataProvider>
      <AdminHeader />
      <AdminBody />
      <AdminFooter />
    </AdminDataProvider>
  );
}
