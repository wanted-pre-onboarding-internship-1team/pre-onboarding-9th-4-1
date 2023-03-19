import { OrderContext } from '../../contexts/OrderContext';
import useOrder from '../../hooks/useOrder';
import { CheckFilters } from '../../types/CheckFilters';
import Filters from './Filters';
import OrderList from './OrderList';
import PageNavigator from './PageNavigator';
import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ?? '1';
  const [checkFilters, setCheckFilters] = useState<CheckFilters>({
    isOnlyToday: true,
  });

  const checkFilterValueChangeHandler = useCallback(
    (name: string, newValue: boolean) => {
      setCheckFilters(prev => {
        return {
          ...prev,
          [name]: newValue,
        };
      });
    },
    []
  );
  const { data, lastPage } = useOrder({
    currentPage: parseInt(currentPage),
    limit: 50,
    checkFilters,
  });

  const onChangePage = useCallback(
    (page: number) => {
      setSearchParams({ page: page.toString() });
    },
    [setSearchParams]
  );

  return (
    <Wrapper
      onClick={() => {
        // setSearchParams({ page: (parseInt(page) + 1).toString() });
      }}>
      <OrderContext.Provider
        value={{
          data: data,
          checkFilter: checkFilters,
          onChangeCheckFilterValue: checkFilterValueChangeHandler,
          currentPage: parseInt(currentPage),
          lastPage: lastPage,
          onChangePage: onChangePage,
        }}>
        <Filters />
        <OrderList />
        <PageNavigator />
      </OrderContext.Provider>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #e2e2e2;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
`;