import { TX_LIST } from '../consts/api';
import { SIZE_PER_PAGE } from '../consts/page';
import { filterTodayTx } from '../utils/transaction';
import axios from 'axios';

export async function fetchTx(page: number) {
  const res = await axios.get(TX_LIST);
  return filterTodayTx(res).slice(
    page * SIZE_PER_PAGE,
    (page + 1) * SIZE_PER_PAGE
  );
}

export async function fetchPages() {
  const res = await axios.get(TX_LIST);
  const filteredList = filterTodayTx(res);
  return Math.ceil(filteredList.length / SIZE_PER_PAGE);
}
