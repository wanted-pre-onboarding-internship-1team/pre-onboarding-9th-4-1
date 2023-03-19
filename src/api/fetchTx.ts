import { TX_LIST } from '../consts/api';
import { SIZE_PER_PAGE } from '../consts/page';
import { filterTodayTx } from '../utils/transaction';
import axios from 'axios';

const delay5Second = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('강제 delay');
      resolve('리졸브 끝!');
    }, 5 * 1000);
  });
};

export async function fetchTx(page: number) {
  const res = await axios.get(TX_LIST);
  const onlyTodayTx = filterTodayTx(res).slice(
    page * SIZE_PER_PAGE,
    (page + 1) * SIZE_PER_PAGE
  );
  await delay5Second();

  return onlyTodayTx;
}

export async function fetchPages() {
  const res = await axios.get(TX_LIST);
  const filteredList = filterTodayTx(res);
  return Math.ceil(filteredList.length / SIZE_PER_PAGE);
}
