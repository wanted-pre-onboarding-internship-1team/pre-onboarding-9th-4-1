import { CheckFilters } from './CheckFilters';
import { Order } from './Order';

export default interface OrderContextData {
  data: Order[];
  checkFilter: CheckFilters;
}
