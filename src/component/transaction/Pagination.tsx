import { fetchPages } from './TransactionList';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Pagination() {
  const {
    isLoading,
    error,
    data: pages,
  } = useQuery<number, Error>(['pages'], fetchPages);
  const [searchParams, setSearchParams] = useSearchParams();

  if (isLoading) return <>'Loading...'</>;

  if (error) return <>'An error has occurred: ' + error</>;

  return (
    <Pages>
      {Array.from(Array(pages), (page: number, idx: number) => {
        return (
          <PageButton
            onClick={() => {
              searchParams.set('page', idx.toString());
              setSearchParams(searchParams);
            }}
            key={idx}>
            {idx + 1}
          </PageButton>
        );
      })}
    </Pages>
  );
}

const Pages = styled.div`
  display: flex;
`;

const PageButton = styled.button``;
