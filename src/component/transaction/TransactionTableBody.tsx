import usePagedTables from '../../hooks/usePagedTables';
import { TX } from '../../interface/Transaction';
import Transaction from './Transaction';
import styled from 'styled-components';

export default function TransactionTableBody() {
  const { isLoading, error, txList } = usePagedTables();
  if (isLoading) {
    console.log('로롣로로롤로딩!!');
    return null;
  }

  if (error) return null;

  //   if (txList === undefined) {
  //     console.log('아무고토업쥬!!');
  //     return null;
  //   }
  // txList
  return (
    <TableBody>
      {txList?.map((tx: TX) => {
        return <Transaction tx={tx} key={tx.id} />;
      })}
    </TableBody>
  );
}

const TableBody = styled.tbody`
  width: 100%;
  background-color: #efefef;
`;
