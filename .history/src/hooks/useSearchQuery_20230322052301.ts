import { useQuery } from "@tanstack/react-query";
import { getOriginDataApi } from "../api/dataApi";

export default function useSearchQuery() {
  const { currentPage, maxPage } = usePage();
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: getData,
  } = useQuery(['data', currentPage], getOriginDataApi);

 
  }, [currentPage, queryClient]);

  return { getData, error, isLoading };
}
