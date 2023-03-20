import { MockApi } from '../api/MockApi';
import { OrderList } from '../component/OrderList';
import Pagenation from '../component/Pagenation';
import { useOrderData } from '../hooks/useOrderData';
import { usePagenation } from '../hooks/usePagenation';

export default function OrderPage() {
  const api = new MockApi();
  const checkDate = new Date('2023-03-08');

  const [data] = useOrderData(api, checkDate);
  const [pageNumber] = usePagenation({ total: data?.length || 0, size: 50 });
  const pageData = splitIntoChunk(data, 50);

  return (
    <div>
      <OrderList data={pageData[pageNumber]} />
      <Pagenation total={data?.length || 0} size={50} />
    </div>
  );
}

function splitIntoChunk(arr: any, chunk: number) {
  if (arr === undefined) {
    return [];
  }

  const result = [];

  for (let index = 0; index < arr.length; index += chunk) {
    const tempArray = arr.slice(index, index + chunk);
    result.push(tempArray);
  }

  return result;
}
