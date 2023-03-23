import App from '../App';
import { mockResponse } from './mockData';
import '@testing-library/jest-dom/extend-expect';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
afterEach(cleanup);

describe('Assignment test', () => {
  it('assignment 1', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockResponse });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      //주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();

      //주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
      const numOfTable = screen.getByTestId('tbody').children.length;
      expect(numOfTable).toBe(50);
    });

    //- 이터 중에서 오늘의 거래건만 보여지도록 해주세요
    //여기서 오늘은 **“2023-03-08”**일을 의미합니다.
    const numOfToday = await screen.findAllByText(/2023-03-08/);
    expect(numOfToday.length).toBe(51); //headder: Today:2023-03-8 exist
  });

  it('assignment 2 - sort orderId', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockResponse });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      const Tbody = screen.getByTestId('tbody');

      const default_1st_Order_Id = Number(
        Tbody.children.item(0)?.firstElementChild?.textContent
      );
      const default_2nd_Order_Id = Number(
        Tbody.children.item(1)?.firstElementChild?.textContent
      );

      //주문번호는 기본적으로 오름차순이다.
      expect(default_1st_Order_Id < default_2nd_Order_Id).toBeTruthy();

      //table header click - sort event
      const orderIdTableHeader = screen.getByText(/주문번호/);
      fireEvent.click(orderIdTableHeader);

      const first_Order_Id = Number(
        Tbody.children.item(0)?.firstElementChild?.textContent
      );
      const second_Order_Id = Number(
        Tbody.children.item(1)?.firstElementChild?.textContent
      );
      //내림차순으로 정렬 변경
      expect(first_Order_Id > second_Order_Id).toBeTruthy();
    });
  });

  it('assignment 2 - sort date', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockResponse });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => {
      const Tbody = screen.getByTestId('tbody');
      const timeHeader = screen.getByText(/거래시간/);

      //내림차순 정렬
      fireEvent.click(timeHeader);
      const first_Date = Tbody.children.item(0)?.children[1].innerHTML || -1;
      const second_Date = Tbody.children.item(1)?.children[1].innerHTML || -1;
      expect(first_Date < second_Date).toBeTruthy();

      //오름차순 정렬
      fireEvent.click(timeHeader);
      const after_click_first_Date =
        Tbody.children.item(0)?.children[1].innerHTML || -1;
      const after_click_second_Date =
        Tbody.children.item(1)?.children[1].innerHTML || -1;
      expect(after_click_first_Date > after_click_second_Date).toBeTruthy();
    });
  });

  it('assignment 3 - filter', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockResponse });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    waitFor(() => {
      const filterButton = screen.getByTestId('filterButton');
      fireEvent.click(filterButton);
    });
    expect(screen.queryByText(/false/)).toBeNull();

    waitFor(() => {
      const filterButton = screen.getByTestId('filterButton');
      fireEvent.click(filterButton);
    });
    expect(screen.queryByText(/true/)).toBeNull();
  });

  it('assignment 4 - search', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockResponse });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const searchPrompt = screen.getByTestId('search');
    waitFor(() => {
      fireEvent.change(searchPrompt, { target: { value: 'ann' } });
    });
    const searched = await screen.findAllByText(/ann/);
    const annInMock = mockResponse.filter(item => {
      const regex = new RegExp(`ann.*`);
      return regex.test(item.customer_name);
    });

    expect(searched.length).toBe(annInMock.length);
  });
});
