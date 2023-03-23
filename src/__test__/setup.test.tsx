import SearchContextProvider from '../context/SearchContext';
import mockData from './../../public/data/mockData.json';
import * as api from './../api/dataApi';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const data = mockData
  .filter(data => data.transaction_time.includes('2023-03-08'))
  .slice(0, 50);

export const setup = () => {
  jest.spyOn(api, 'getTodayDataApi').mockResolvedValue(data);

  jest.spyOn(api, 'getOriginDataApi').mockResolvedValue([...mockData]);
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
