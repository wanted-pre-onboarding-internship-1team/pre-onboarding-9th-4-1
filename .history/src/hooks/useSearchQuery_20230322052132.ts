export default function useSearchQuery() {
  const { currentPage, maxPage } = usePage();
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: getData,
  } = useQuery(['data', currentPage], () => {
    return getTodayDataApi(currentPage, MAX_NUM, TODAY);
  });

  useEffect(() => {
    if (currentPage <= maxPage - 2) {
      const nextPage = currentPage + 1;

      queryClient.prefetchQuery(['data', nextPage], () =>
        getTodayDataApi(nextPage, MAX_NUM, TODAY)
      );
    }
  }, [currentPage, queryClient]);

  return { getData, error, isLoading };
}
