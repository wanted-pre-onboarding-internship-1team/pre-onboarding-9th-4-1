import { TX_LIST } from '../consts/api';
import axios from 'axios';

export async function fetchTx(page: number) {
  return await axios
    .get(TX_LIST)
    .then(res => res.data.slice(page * 50, (page + 1) * 50));
}

export async function fetchPages() {
  return await axios.get(TX_LIST).then(res => res.data.length / 50);
}
