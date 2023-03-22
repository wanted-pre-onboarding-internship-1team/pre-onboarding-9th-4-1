import { MAX_NUM, TODAY } from '../constants/orders';
import { usePageDataProcessor } from '../hooks/usePageDataProcessor';
import useTableQuery from '../hooks/useTableQuery';
import { DataType } from '../types/data.types';
import { createContext, ReactNode, useContext } from 'react';

type ProviderProps = {
  children: ReactNode;
};

type Value = {
  pageData: DataType[][];
  limit: number;
};
const defaultValue: Value = { pageData: [[]], limit: 0 };

const AdminContext = createContext(defaultValue);

const AdminDataProvider = ({ children }: ProviderProps) => {
  const { response } = useTableQuery();
  const [pageDatas, currentPage, maxPage, length] = usePageDataProcessor(
    response,
    TODAY
  );
  return (
    <AdminContext.Provider value={{ pageData: pageDatas, limit: MAX_NUM }}>
      {children}
    </AdminContext.Provider>
  );
};

const useAdminContext = () => useContext(AdminContext);

export { AdminDataProvider, useAdminContext };
