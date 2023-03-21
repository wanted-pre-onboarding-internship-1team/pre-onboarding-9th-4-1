import AdminBody from '../component/AdminBody';
import AdminFooter from '../component/AdminFooter';
import AdminHeader from '../component/AdminHeader';
import SearchContextProvider from '../context/SearchContext';

export default function Mainpage() {
  return (
    <SearchContextProvider>
      <AdminHeader />
      <AdminBody />
      <AdminFooter />
    </SearchContextProvider>
  );
}
