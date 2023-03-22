import useTableQuery from '../hooks/useTableQuery';
import { Table } from '@tanstack/react-table';
import { render } from '@testing-library/react';

describe('Table', () => {
  it('50개 데이터 보여지는지', () => {
    const { getData } = useTableQuery();
    //render(<Table data={[]} columns={[]} />);
  });
});

export {};
