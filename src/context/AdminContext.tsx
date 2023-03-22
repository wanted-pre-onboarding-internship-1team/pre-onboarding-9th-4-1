import { MAX_NUM, TODAY } from '../constants/orders';
import { usePageDataProcessor } from '../hooks/usePageDataProcessor';
import useTableQuery from '../hooks/useTableQuery';
import { DataType } from '../types/data.types';
import { createContext, ReactNode, useContext } from 'react';

type ProviderProps = {
  children: ReactNode;
};

type AdminContextStat = {
  isLoading: boolean;
  error: unknown;
};

type AdminContextPage = {
  currentPage: number;
  maxPage: number;
  length: number;
  itemPerPage: number;
};

type AdminContextValue = {
  status: AdminContextStat;
  data: DataType[][];
  page: AdminContextPage;
};

const defaultValue: AdminContextValue = {
  status: { isLoading: true, error: false },
  data: [[]],
  page: { currentPage: 0, maxPage: 0, length: 0, itemPerPage: MAX_NUM },
};

const AdminContext = createContext(defaultValue);

const AdminDataProvider = ({ children }: ProviderProps) => {
  const { response, isLoading, error } = useTableQuery();
  const [pageDatas, currentPage, maxPage, length] = usePageDataProcessor(
    response,
    TODAY
  );

  const adminDatas: AdminContextValue = {
    status: { isLoading, error },
    data: pageDatas,
    page: { currentPage, maxPage, length, itemPerPage: MAX_NUM },
  };

  return (
    <AdminContext.Provider value={adminDatas}>{children}</AdminContext.Provider>
  );
};

const useAdminContext = () => useContext(AdminContext);

export { AdminDataProvider, useAdminContext };
