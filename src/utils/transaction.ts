import { TxResponse, TX } from '../interface/Transaction';
import { datesAreOnSameDay, createToday } from './date';

export const filterTodayTx = (res: TxResponse) => {
  return res.data.filter((tx: TX) => {
    const txDate = new Date(tx.transaction_time);
    return datesAreOnSameDay(createToday(), txDate);
  });
};
