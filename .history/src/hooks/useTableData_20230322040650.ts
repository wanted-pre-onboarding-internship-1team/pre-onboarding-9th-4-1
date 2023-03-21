import allowSortKey from '../utill/sortKey';
import Tag from './../component/common/Tag';
import { DataType } from './../types/data.types';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

const useTableData = (dataList: DataType[]) => {
  const columns = useMemo<ColumnDef<DataType>[]>(() => {
    if (!dataList) return [];

    type DataHeaderType = {
      [index: string]: string;
    };

    const dataHeader: DataHeaderType = {
      id: '주문번호',
      transaction_time: '거래시간',
      status: '주문처리상태',
      customer_id: '고객번호',
      customer_name: '고객이름',
      currency: '가격',
    };

    return Object.keys(dataList[0]).map(key => ({
      header: '<div>123</div>',
      accessorKey: key,
      cell: info => {
        const value = info.getValue() as string | number;
        return key === 'status' ? Tag({ value }) : value;
      },
      sortingFn: allowSortKey(key) ? 'datetime' : undefined,
      enableSorting: allowSortKey(key) ? true : false,
      enableColumnFilter: key === 'status' ? true : false,
      filterFn: 'equalsString',
    }));
  }, [dataList]);

  const data = useMemo(() => dataList, [dataList]);

  return { columns, data };
};

export default useTableData;
