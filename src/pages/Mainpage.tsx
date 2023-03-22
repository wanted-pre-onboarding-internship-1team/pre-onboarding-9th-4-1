import AdminBody from '../component/AdminBody';
import AdminFooter from '../component/AdminFooter';
import AdminHeader from '../component/AdminHeader';
import Loading from '../component/common/Loading';
import SearchContextProvider from '../context/SearchContext';
import { Suspense } from 'react';

export default function Mainpage() {
  return (
    <SearchContextProvider>
      <AdminHeader />
      <Suspense fallback={<Loading text='로딩 중입니다⏳' />}>
        <AdminBody />
      </Suspense>
      <AdminFooter />
    </SearchContextProvider>
  );
}
