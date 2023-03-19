import { TX_LIST } from '../consts/api';
import { SINGLE_PAGE_SIGE } from '../consts/page';
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
      .slice(page * SINGLE_PAGE_SIGE, (page + 1) * SINGLE_PAGE_SIGE)
  );
}

export async function fetchPages() {
  return await axios.get(TX_LIST).then(res => {
    const filteredList = res.data.filter((tx: TX) => {
      const txDate = new Date(tx.transaction_time);
      return datesAreOnSameDay(createToday(), txDate);
    });
    return Math.ceil(filteredList.length / SINGLE_PAGE_SIGE);
  });
}
