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

    await screen.debug(undefined, Infinity);
  });
});
