import OrderContextData from '../types/OrderContextData';
import { createContext } from 'react';

export const OrderContext = createContext<OrderContextData>({
  data: [],
  checkFilter: {
    isOnlyToday: true,
  },
});
