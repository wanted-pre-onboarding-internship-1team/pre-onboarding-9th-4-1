import Tag from './../component/common/Tag';
import { DataType } from './../types/data.types';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

const useTableData = (dataList: DataType[]) => {
  const columns = useMemo<ColumnDef<DataType>[]>(() => {
    if (!dataList) return [];

    return Object.keys(dataList[0]).map(key => ({
      header: key,
      accessorKey: key,
      cell: info => {
        const value = info.getValue() as string | number;
        return key === 'status' ? Tag({ value }) : value;
      },
    }));
  }, [dataList]);

  const data = useMemo(() => dataList, [dataList]);

  return { columns, data };
};

export default useTableData;
