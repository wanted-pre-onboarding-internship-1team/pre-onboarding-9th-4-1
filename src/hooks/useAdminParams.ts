import { useSearchParams } from 'react-router-dom';

const useAdminParams = (paramsName: string, defaultValue: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get(paramsName) || defaultValue;

  const setParams = (newValue: string | boolean | number) => {
    const valueToString = String(newValue);
    const prevParams = [...searchParams.entries()].reduce(
      (o, [key, value]) => ({ ...o, [key]: value }),
      {}
    );

    setSearchParams({ ...prevParams, [paramsName]: valueToString });
  };

  return { currentParams, setParams };
};

export default useAdminParams;
