import SearchContextProvider from '../context/SearchContext';
import { DataType } from '../types/data.types';
import mockData from './../../public/data/mockData.json';
import * as api from './../api/dataApi';
import * as useTableData from './../hooks/useTableData';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const columns: ColumnDef<DataType, unknown>[] = [
  {
    header: '주문번호',
    accessorKey: 'id',
    sortingFn: 'datetime',
    enableSorting: true,
    enableColumnFilter: false,
    filterFn: 'equals',
    sortDescFirst: true,
  },
  {
    header: '거래시간',
    accessorKey: 'transaction_time',
    sortingFn: 'datetime',
    enableSorting: true,
    enableColumnFilter: false,
    filterFn: 'equals',
    sortDescFirst: true,
  },
  {
    header: '주문처리상태',
    accessorKey: 'status',
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: 'equals',
    sortDescFirst: true,
  },
  {
    header: '고객번호',
    accessorKey: 'customer_id',
    enableSorting: false,
    enableColumnFilter: false,
    filterFn: 'equals',
    sortDescFirst: true,
  },
  {
    header: '고객이름',
    accessorKey: 'customer_name',
    enableSorting: false,
    enableColumnFilter: false,
    filterFn: 'equals',
    sortDescFirst: true,
  },
  {
    header: '가격',
    accessorKey: 'currency',
    enableSorting: false,
    enableColumnFilter: false,
    filterFn: 'equals',
    sortDescFirst: true,
  },
];

const data = mockData
  .filter(data => data.transaction_time.includes('2023-03-08'))
  .slice(0, 50);

export const setup = () => {
  jest.spyOn(api, 'getTodayDataApi').mockResolvedValue(data);

  jest.spyOn(api, 'getOriginDataApi').mockResolvedValue([...mockData]);

  jest.spyOn(useTableData, 'default').mockImplementation(dataList => ({
    columns,
    data: dataList,
  }));

  jest.mock('@tanstack/react-query', () => ({
    ...jest.requireActual('@tanstack/react-query'),
    useQueryClient: () => ({
      ...jest.requireActual('@tanstack/react-query').useQueryClient(),
      useQuery: jest.fn().mockReturnValue({
        data: {},
        isLoading: false,
        isSuccess: true,
        error: {},
      }),
    }),
  }));
};

export const renderAll = (children: ReactNode) => {
  const queryClient = new QueryClient();

  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>{children}</SearchContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
