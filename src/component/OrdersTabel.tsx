import useFetch from '../hooks/useFetch';
import useGetListPerPage from '../hooks/useGetListPerPage';
import usePageQuery from '../hooks/usePageQuery';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function OrdersTabel_test() {
  const [page, setPage] = useState<number>(0);
  const { maxPage } = useFetch();
  const { setQuery } = usePageQuery();
  const { todaySliceOrders, isPreviousData } = useGetListPerPage();
  console.log(todaySliceOrders);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '주문번호',
      width: 100,
      editable: false,
      sortable: true,
    },
    {
      field: 'transaction_time',
      headerName: '거래시간',
      width: 170,
      editable: false,
      sortable: true,
    },
    {
      field: 'status',
      headerName: '처리상태',
      type: 'boolean',
      width: 100,
      editable: false,
      sortable: false,
    },
    {
      field: 'customer_id',
      headerName: '고객번호',
      type: 'number',
      editable: false,
      sortable: false,
      width: 100,
    },
    {
      field: 'customer_name',
      headerName: '고객이름',
      editable: false,
      sortable: false,
      width: 160,
    },
    {
      field: 'currency',
      headerName: '가격',
      editable: false,
      sortable: false,
      width: 100,
    },
  ];
  const rows = todaySliceOrders;

  const handleBeforeButton = () => {
    setPage(old => Math.max(old - 1, 0));
  };

  const handleNextButton = () => {
    if (!isPreviousData && page !== maxPage) {
      setPage(old => old + 1);
    }
  };

  useEffect(() => {
    setQuery(page);
  }, [page]);

  return (
    <TableContainer>
      <GridBox>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[50]}
          hideFooter={true}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </GridBox>
      <TableFooter>
        <button onClick={handleBeforeButton} disabled={page === 0}>
          Previous Page
        </button>
        {page + 1}
        <button
          onClick={handleNextButton}
          disabled={isPreviousData || page + 1 === maxPage}>
          Next Page
        </button>
      </TableFooter>
    </TableContainer>
  );
}

const TableContainer = styled.div``;
const GridBox = styled.div`
  height: 1200px;
  width: 100%;
`;
const TableFooter = styled.div``;
