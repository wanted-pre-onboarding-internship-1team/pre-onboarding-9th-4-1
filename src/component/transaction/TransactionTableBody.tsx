import usePagedTables from '../../hooks/usePagedTables';
import { TX } from '../../interface/Transaction';
import Spinner from '../common/Spinner';
import Transaction from './Transaction';
import { Suspense } from 'react';
import styled from 'styled-components';

export default function TransactionTableBody() {
  const { isLoading, error, txList } = usePagedTables();
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <TableBody>
      {/* <Suspense fallback={'로딩중...'}> */}
      {txList?.map((tx: TX) => {
        return <Transaction tx={tx} key={tx.id} />;
      })}
      {/* </Suspense> */}
    </TableBody>
  );
}

const TableBody = styled.tbody`
  width: 100%;
  background-color: #efefef;
`;
