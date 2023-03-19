import useGetListAll from '../hooks/useGetListAll';
import useGetListPerPage from '../hooks/useGetListPerPage';
import usePageQuery from '../hooks/usePageQuery';
import { IResponse } from '../types/IResponse';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
import styled from 'styled-components';

export default function OrdersTabel() {
  const [page, setPage] = useState<number>(0);
  const { maxPage } = useGetListAll();
  const { setQuery } = usePageQuery();
  const { todaySliceOrders, isLoading, isPreviousData } = useGetListPerPage();
  // const { rowData, setRowData } = useState<IResponse[]>(todaySliceOrders);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '주문번호',
      width: 140,
      editable: false,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'transaction_time',
      headerName: '거래시간',
      width: 170,
      editable: false,
      sortable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: '처리상태',
      type: 'boolean',
      width: 150,
      editable: false,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'customer_id',
      headerName: '고객번호',
      type: 'number',
      editable: false,
      sortable: false,
      width: 140,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'customer_name',
      headerName: '고객이름',
      editable: false,
      sortable: false,
      width: 160,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'currency',
      headerName: '가격',
      editable: false,
      sortable: false,
      width: 100,
      align: 'center',
      headerAlign: 'center',
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
      <TableInner>
        <TableTitle>주문현황</TableTitle>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            <GridBox>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[50]}
                hideFooter={true}
                paginationModel={{ pageSize: 50, page: 0 }}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </GridBox>
            <TableFooter>
              <BeforeBtn onClick={handleBeforeButton} disabled={page === 0}>
                <RxChevronLeft />
              </BeforeBtn>
              {page + 1} / {maxPage}
              <BeforeBtn
                onClick={handleNextButton}
                disabled={isPreviousData || page + 1 === maxPage}>
                <RxChevronRight />
              </BeforeBtn>
            </TableFooter>
          </>
        )}
      </TableInner>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  padding-left: 240px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const TableInner = styled.div`
  padding: 40px;
  height: 80vh;
`;

const TableTitle = styled.h1`
  font-size: 2.2rem;
  padding: 0;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 20px;
`;

const GridBox = styled.div`
  height: 100%;
  width: 80%;
`;
const TableFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 20px;
`;

const BeforeBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-size: 20px;
`;
