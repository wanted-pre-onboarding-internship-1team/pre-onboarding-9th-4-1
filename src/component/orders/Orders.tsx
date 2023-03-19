import { OrderContext } from '../../contexts/OrderContext';
import useOrder from '../../hooks/useOrder';
import { CheckFilters } from '../../types/CheckFilters';
import Filters from './Filters';
import OrderList from './OrderList';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const [checkFilters, setCheckFilters] = useState<CheckFilters>({
    isOnlyToday: true,
  });
  const { data } = useOrder({
    currentPage: parseInt(page),
    limit: 50,
    checkFilters,
  });
  return (
    <Wrapper
      onClick={() => {
        setSearchParams({ page: (parseInt(page) + 1).toString() });
      }}>
      <OrderContext.Provider
        value={{
          data: data,
          checkFilter: checkFilters,
        }}>
        <Filters />
        <OrderList />
      </OrderContext.Provider>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #e2e2e2;
  padding: 1rem;
`;
