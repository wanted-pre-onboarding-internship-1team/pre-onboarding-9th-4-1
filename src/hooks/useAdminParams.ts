import { useSearchParams } from 'react-router-dom';

const useAdminParams = (paramsName: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get(paramsName) || '0';

  const setParams = (newValue: number) =>
    setSearchParams({ [paramsName]: newValue + '' });

  return { currentParams, setParams };
};

export default useAdminParams;
