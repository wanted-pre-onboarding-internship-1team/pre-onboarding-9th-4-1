import { TODAY } from './../constants/orders';
import { DataType } from './../types/data.types';
import usePage from './usePage';

const usePageProcessor = (data: DataType[], today: string) => {
  const { currentPage, maxPage } = usePage();

  return [1];
};

export { usePageProcessor };
