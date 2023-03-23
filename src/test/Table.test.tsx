import Table from '../component/common/Table';
import useTableData from '../hooks/useTableData';
import { orders } from './order';
import '@testing-library/jest-dom';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const MOCK_DATA = orders.slice(0, 50);

describe('Table', () => {
  test('50개 데이터 보여지는지', () => {
    const { result } = renderHook(() => useTableData(MOCK_DATA));
    render(
      <Table data={result.current.data} columns={result.current.columns} />
    );

    const tdElement = screen.getAllByRole('row');
    expect(tdElement.length).toBe(51);
  });

  test('주문번호 헤더 클릭시 내림차순 정렬', () => {
    const { result } = renderHook(() => useTableData(MOCK_DATA));
    render(
      <Table data={result.current.data} columns={result.current.columns} />
    );

    MOCK_DATA.sort((a, b) => a.id - b.id);

    userEvent.click(screen.getByText('주문번호'));

    const tableRows = screen.getAllByRole('row');

    expect(tableRows[1]).toHaveTextContent(createIdRegExp(MOCK_DATA[49].id));
    expect(tableRows[2]).toHaveTextContent(createIdRegExp(MOCK_DATA[48].id));
    expect(tableRows[3]).toHaveTextContent(createIdRegExp(MOCK_DATA[47].id));
  });

  test('주문번호 헤더 두번 클릭시 내림차순 정렬', () => {
    const { result } = renderHook(() => useTableData(MOCK_DATA));
    render(
      <Table data={result.current.data} columns={result.current.columns} />
    );
    MOCK_DATA.sort((a, b) => a.id - b.id);

    userEvent.click(screen.getByText('주문번호'));
    userEvent.click(screen.getByText('주문번호'));
    const tableRows = screen.getAllByRole('row');

    expect(tableRows[1]).toHaveTextContent(createIdRegExp(MOCK_DATA[0].id));
    expect(tableRows[2]).toHaveTextContent(createIdRegExp(MOCK_DATA[1].id));
    expect(tableRows[3]).toHaveTextContent(createIdRegExp(MOCK_DATA[2].id));
  });

  test('거래시간 헤더 클릭시 오름차순 정렬', () => {
    const { result } = renderHook(() => useTableData(MOCK_DATA));
    render(
      <Table data={result.current.data} columns={result.current.columns} />
    );
    MOCK_DATA.sort(
      (a, b) =>
        new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime()
    );
    userEvent.click(screen.getByText('거래시간'));

    const tableRows = screen.getAllByRole('row');

    expect(tableRows[1]).toHaveTextContent(MOCK_DATA[0].transaction_time);
    expect(tableRows[2]).toHaveTextContent(MOCK_DATA[1].transaction_time);
    expect(tableRows[3]).toHaveTextContent(MOCK_DATA[2].transaction_time);
  });

  test('거래시간 헤더 두번 클릭시 내림차순 정렬', () => {
    const { result } = renderHook(() => useTableData(MOCK_DATA));
    render(
      <Table data={result.current.data} columns={result.current.columns} />
    );
    MOCK_DATA.sort(
      (a, b) =>
        new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime()
    );

    userEvent.click(screen.getByText('거래시간'));
    userEvent.click(screen.getByText('거래시간'));

    const tableRows = screen.getAllByRole('row');

    expect(tableRows[1]).toHaveTextContent(MOCK_DATA[49].transaction_time);
    expect(tableRows[2]).toHaveTextContent(MOCK_DATA[48].transaction_time);
    expect(tableRows[3]).toHaveTextContent(MOCK_DATA[47].transaction_time);
  });

  test('필터 한번 클릭시 true만 보여지도록', () => {
    const { result } = renderHook(() => useTableData(MOCK_DATA));
    render(
      <Table data={result.current.data} columns={result.current.columns} />
    );

    MOCK_DATA.sort(
      (a, b) =>
        new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime()
    );
    userEvent.click(screen.getByTestId('filterBtn'));

    const tableRows = screen.getAllByRole('row');

    for (let i = 1; i < tableRows.length; i++) {
      expect(tableRows[i]).toHaveTextContent('true');
    }
  });

  test('필터 두번 클릭시 false 보여지도록', () => {
    const { result } = renderHook(() => useTableData(MOCK_DATA));
    render(
      <Table data={result.current.data} columns={result.current.columns} />
    );

    MOCK_DATA.sort(
      (a, b) =>
        new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime()
    );
    userEvent.click(screen.getByTestId('filterBtn'));
    userEvent.click(screen.getByTestId('filterBtn'));

    const tableRows = screen.getAllByRole('row');

    for (let i = 1; i < tableRows.length; i++) {
      expect(tableRows[i]).toHaveTextContent('false');
    }
  });
});

function createIdRegExp(id: number) {
  return new RegExp(`^${id}`);
}
