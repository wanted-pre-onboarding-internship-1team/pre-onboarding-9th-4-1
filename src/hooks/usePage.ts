import { getTodayDataApi } from '../api/dataApi';
import { MAX_NUM, TODAY } from './../constants/orders';
import useAdminParams from './useAdminParams';
import { useState, useEffect } from 'react';

const usePage = () => {
  const { currentParams, setParams: setPage } = useAdminParams('page');

  const currentPage = Number(currentParams);

  const [maxPage, setMaxPage] = useState(0);
  const [length, setLength] = useState(0);

  const getDataLength = async () => {
    const response = await getTodayDataApi(0, 0, TODAY);
    const page = ~~(response.length / MAX_NUM) + 1;

    setLength(response.length);
    setMaxPage(page);
  };

  useEffect(() => {
    getDataLength();
  }, []);

  return { currentPage, setPage, maxPage, length };
};

export default usePage;
