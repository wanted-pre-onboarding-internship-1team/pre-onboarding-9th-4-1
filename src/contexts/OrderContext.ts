import OrderContextData from '../types/OrderContextData';
import { createContext } from 'react';

export const OrderContext = createContext<OrderContextData>({
  data: [],
  checkFilter: {
    isOnlyToday: true,
  },
  onChangeCheckFilterValue: (name: string, newValue: boolean) => {
    /* */
  },
  currentPage: 1,
  lastPage: 1,
  onChangePage: (page: number) => {
    /* */
  },
});
