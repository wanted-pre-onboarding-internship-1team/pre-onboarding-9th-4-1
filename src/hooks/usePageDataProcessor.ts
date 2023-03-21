import { MAX_NUM } from '../constants/orders';
import { DataType, DataTypeKey } from '../types/data.types';
import { splitArray } from '../units/splitArray';
import useAdminParams from './useAdminParams';

const usePageDataProcessor = (data: DataType[], today: string) => {
  const { currentParams: isDone } = useAdminParams('status');
  const { currentParams: searchQuery } = useAdminParams('search');
  const { currentParams: sortOption } = useAdminParams('sort');

  const defalutValue = '0';
  const sortKey: DataTypeKey =
    sortOption === 'transaction_time' ? sortOption : 'id';

  const proccedData = data
    .filter(order => order.transaction_time.includes(today))
    .filter(order => order.status || isDone === defalutValue)
    .filter(
      order =>
        order.customer_name.toLowerCase().includes('ann') ||
        searchQuery === defalutValue
    )
    .sort((order1, order2) => {
      return order1[sortKey] < order2[sortKey] ? -1 : 1;
    });

  const pageDatas = splitArray(proccedData, MAX_NUM);

  return pageDatas;
};

export { usePageDataProcessor };
