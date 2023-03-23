import App from '../App';
import { getTodayDataApi } from '../api/dataApi';
import { mockResponse } from './mockData';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
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
});
