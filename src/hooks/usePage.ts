import { getTodayDataApi } from '../api/dataApi';
import getFilteredData from '../units/getFilteredData';
import { MAX_NUM } from './../constants/orders';
import useAdminParams from './useAdminParams';
import { useQuery } from '@tanstack/react-query';

const usePage = () => {
  const { currentParams, setParams: setPage } = useAdminParams('page', '0');
  const { currentParams: currentFilter } = useAdminParams('filter', '');
  let currentPage = Number(currentParams);

  const { data = [] } = useQuery(['page', currentFilter], () => {
    if (currentFilter === '') {
      return getTodayDataApi();
    } else {
      return getFilteredData('status', currentFilter);
    }
  });

  const length = data.length;
  const maxPage = Math.floor(data.length / MAX_NUM) + 1;

  if (maxPage < currentPage) {
    currentPage = maxPage - 1;
  }

  return { currentPage, setPage, maxPage, length };
};

export default usePage;
