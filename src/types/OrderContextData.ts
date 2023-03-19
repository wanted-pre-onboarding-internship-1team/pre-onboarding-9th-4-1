import { CheckFilters } from './CheckFilters';
import { Order } from './Order';

export default interface OrderContextData {
  data: Order[];
  checkFilter: CheckFilters;
  onChangeCheckFilterValue: (name: string, newValue: boolean) => void;
  currentPage: number;
  lastPage: number;
  onChangePage: (page: number) => void;
}
