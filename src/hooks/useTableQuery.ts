import { getTodayDataApi } from '../api/dataApi';
import { useQuery } from '@tanstack/react-query';

const useTableQuery = () => {
  const {
    isLoading,
    error,
    data: getData = [],
  } = useQuery(['data'], () => {
    return getTodayDataApi();
  });

  return { getData, error, isLoading };
};

export default useTableQuery;
