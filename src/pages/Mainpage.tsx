import { GetData } from '../api/apiGET';
import DataList from '../component/DataList';
import { Container } from './Mainpage.styled';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

interface DataType {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}

export default function Mainpage() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data: getData } = useQuery(
    ['data', pageNumber],
    () => GetData(pageNumber),
    {
      refetchInterval: 5000,
      staleTime: Infinity,
    }
  );
  return (
    <Container>
      {getData ? <DataList data={getData} /> : <div>Loading..</div>}
      <div>
        {[...Array(10).keys()].map(page => (
          <button
            className='pageBtn'
            key={page}
            onClick={() => setPageNumber(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    </Container>
  );
}
