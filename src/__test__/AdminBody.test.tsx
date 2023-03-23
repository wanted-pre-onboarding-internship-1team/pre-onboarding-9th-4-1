import AdminBody from './../component/AdminBody';
import { setup } from './setup.test';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AdminBody', () => {
  beforeEach(() => {
    setup(<AdminBody />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('한 페이지에 오늘의 거래 건으로 50건의 주문이 보여야한다.', async () => {
    const tableBodyRows = await screen.findAllByTestId('table-body-row');

    expect(tableBodyRows.length).toBeLessThanOrEqual(50);
    tableBodyRows.forEach(row => expect(row).toHaveTextContent('2023-03-08'));
  });

  it('주문번호, 거래일자 버튼을 누르면 내림차순 정렬이 되어야한다.', async () => {
    const getSorted = (array: any) => {
      return [...array].sort((a, b) => (b > a ? 1 : -1));
    };

    const id = await screen.findByTestId('table-header-cell-id');
    userEvent.click(id);
    const idCell = await screen.findAllByTestId('table-body-cell-id');
    const idText = idCell.map(Number);

    expect(idText).toEqual(getSorted(idText));

    const time = await screen.findByTestId(
      'table-header-cell-transaction_time'
    );
    userEvent.click(time);
    const timeCell = await screen.findAllByTestId(
      'table-body-cell-transaction_time'
    );
    const timeText = timeCell.map(item => String(item.textContent));

    expect(timeText).toEqual(getSorted(timeText));
  });

  it('주문상태를 한번 누르면 true인 데이터들만 보여져야한다.', async () => {
    const status = await screen.findByTestId('table-body-filter-btn');

    userEvent.click(status);

    const statusCell = await screen.findAllByTestId('table-body-cell-status');
    statusCell.forEach(cell => expect(cell.textContent).toBe('true'));
  });

  it('주문상태를 두번 누르면 false인 데이터들만 보여져야한다.', async () => {
    const status = await screen.findByTestId('table-body-filter-btn');

    userEvent.click(status);
    userEvent.click(status);

    const statusCell = await screen.findAllByTestId('table-body-cell-status');
    statusCell.forEach(cell => expect(cell.textContent).toBe('false'));
  });
});
