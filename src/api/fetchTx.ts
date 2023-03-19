import { TX_LIST } from '../consts/api';
import { TX } from '../interface/Transaction';
import { createToday, datesAreOnSameDay } from '../utils/date';
import axios from 'axios';

export async function fetchTx(page: number) {
  return await axios.get(TX_LIST).then(res =>
    res.data
      .filter((tx: TX) => {
        const txDate = new Date(tx.transaction_time);
        return datesAreOnSameDay(createToday(), txDate);
      })
      .slice(page * 50, (page + 1) * 50)
  );
}

export async function fetchPages() {
  return await axios.get(TX_LIST).then(res => {
    const filteredList = res.data.filter((tx: TX) => {
      const txDate = new Date(tx.transaction_time);
      return datesAreOnSameDay(createToday(), txDate);
    });
    return Math.ceil(filteredList.length / 50);
  });
}
