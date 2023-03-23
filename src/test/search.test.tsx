import { queryClient } from '../App';
import SearchContextProvider from '../context/SearchContext';
import Mainpage from '../pages/Mainpage';
import { orders } from './order';
import { QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('axios');

describe('검색', () => {
  test('Ignacia Hood 이름 검색하기', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: orders,
    });

    await act(async () => {
      render(
        withAllContexts(
          withRouter(<Route path='/' element={<Mainpage />} />, '/')
        )
      );
    });

    //이름 입력
    await act(async () => {
      const inputText = screen.getByTestId('search-box');
      userEvent.type(inputText, 'Ignacia Hood');
    });

    // 이름이 테이블에 있는지 확인
    const tableRows = screen.getAllByRole('row');
    expect(tableRows[1]).toHaveTextContent('Ignacia Hood');
  });

  test('존재하지 않는 이름 검색하기', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: orders,
    });

    await act(async () => {
      render(
        withAllContexts(
          withRouter(<Route path='/' element={<Mainpage />} />, '/')
        )
      );
    });

    //이름 입력
    await act(async () => {
      const inputText = screen.getByTestId('search-box');
      userEvent.type(inputText, '유승윤');
    });

    // 이름이 테이블에 있는지 확인 없으면 기존의 데이터를 보여줌
    const tableRows = screen.getAllByRole('row');
    expect(tableRows.length).toBe(51);
  });
});

function withRouter(routes: any, initialEntry = '/') {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}

function withAllContexts(children: any) {
  const testClient = queryClient;
  return (
    <SearchContextProvider>
      <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
    </SearchContextProvider>
  );
}
