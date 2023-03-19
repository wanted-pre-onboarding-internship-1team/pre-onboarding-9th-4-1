import useFetch from '../hooks/useFetch';
import useGetListPerPage, { LIMIT } from '../hooks/useGetListPerPage';
import usePageQuery from '../hooks/usePageQuery';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function OrdersTabel_test() {
  const [page, setPage] = useState<number>(0);
  const { isPreviousData, maxPage } = useFetch();
  const { setQuery } = usePageQuery();
  const { todayOrders } = useGetListPerPage();
  console.log(todayOrders);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'id',
      width: 50,
      editable: false,
      sortable: true,
    },
    {
      field: 'transaction_time',
      headerName: 'transaction_time',
      width: 170,
      editable: false,
      sortable: true,
    },
    {
      field: 'status',
      headerName: 'status',
      type: 'boolean',
      width: 70,
      editable: false,
      sortable: false,
    },
    {
      field: 'customer_id',
      headerName: 'customer_id',
      type: 'number',
      editable: false,
      sortable: false,
      width: 160,
    },
    {
      field: 'customer_name',
      headerName: 'customer_name',
      editable: false,
      sortable: false,
      width: 160,
    },
    {
      field: 'currency',
      headerName: 'currency',
      editable: false,
      sortable: false,
      width: 160,
    },
  ];
  const rows = todayOrders;

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
const GridBox = styled(Box)`
  height: 1200px;
  width: 100%;
`;
const TableFooter = styled.div``;
