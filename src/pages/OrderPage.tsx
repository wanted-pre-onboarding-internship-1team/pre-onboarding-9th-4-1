import { MockApi } from '../api/MockApi';
import { OrderList } from '../component/OrderList';
import Pagenation from '../component/Pagenation';
import { useOrderData } from '../hooks/useOrderData';
import { usePagenation } from '../hooks/usePagenation';
import { useSearchParams } from 'react-router-dom';

export default function OrderPage() {
  const api = new MockApi();
  const checkDate = new Date('2023-03-08');

  const [data] = useOrderData(api, checkDate);
  const [pageNumber] = usePagenation({ total: data?.length || 0, size: 50 });

  return (
    <div>
      <div>{pageNumber}</div>
      <OrderList data={data || []} />
      <Pagenation total={data?.length || 0} size={50} />
    </div>
  );
}
