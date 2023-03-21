import { getDataApi } from '../api/dataApi';
import { useQuery } from '@tanstack/react-query';

const useTableQuery = () => {
  const { isLoading, error, data } = useQuery(['data'], () => {
    return getDataApi();
  });

  const response = data || [];

  return { response, error, isLoading };
};

export default useTableQuery;
