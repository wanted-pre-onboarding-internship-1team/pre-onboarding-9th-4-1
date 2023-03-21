import { MockApi } from '../api/MockApi';
import { OrderList } from '../component/OrderList';
import Pagenation from '../component/Pagenation';
import { useOrderData } from '../hooks/useOrderData';
import { usePagenation } from '../hooks/usePagenation';
import { splitArray } from '../utils/splitArray';

export default function OrderPage() {
  const api = new MockApi();
  const checkDate = new Date('2023-03-08');

  const data = useOrderData(api, checkDate);
  const [pageNumber] = usePagenation({ total: data?.length || 0, size: 50 });
  const pageData = splitArray(data, 50);

  return (
    <div>
      <OrderList data={pageData[pageNumber]} />
      <Pagenation total={data?.length || 0} size={50} />
    </div>
  );
}
