import { getOriginDataApi } from '../api/dataApi';
import { useSearchContext } from '../context/SearchContext';
import { DataType } from '../types/data.types';
import { useQuery } from '@tanstack/react-query';

export default function useSearchQuery() {
  const {
    isLoading,
    error,
    data: getData,
  } = useQuery(['data', 'origin'], getOriginDataApi);
  const { keyword } = useSearchContext();
  let searchiedData: DataType[] | null = null;

  if (keyword !== '' && getData) {
    searchiedData = getData.filter(item => {
      const regex = new RegExp(`${keyword}.*`);
      return regex.test(item.customer_name);
    });
  }
  console.log('keyword', keyword);
  console.log(searchiedData);
  return { getData: searchiedData || getData, error, isLoading };
}
