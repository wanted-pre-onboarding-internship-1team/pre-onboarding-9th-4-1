import { fetchPages } from '../../api/fetchTx';
import PageButton from './PageButton';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

export default function Pagination() {
  const {
    isLoading,
    error,
    data: pages,
  } = useQuery<number, Error>(['pages'], fetchPages);

  if (isLoading) return <>'Loading...'</>;

  if (error) return <>'An error has occurred: ' + error</>;

  return (
    <Pages>
      {Array.from(Array(pages), (_: number, idx: number) => {
        return <PageButton idx={idx} key={idx} />;
      })}
    </Pages>
  );
}

const Pages = styled.div`
  display: flex;
`;