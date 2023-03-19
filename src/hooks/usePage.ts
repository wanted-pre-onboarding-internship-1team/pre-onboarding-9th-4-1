import { getTodayDataApi } from '../api/dataApi';
import { TODAY } from './../constants/orders';
import useAdminParams from './useAdminParams';
import { useState, useEffect } from 'react';

const usePage = () => {
  const { currentParams } = useAdminParams('page');
  const currentPage = Number(currentParams);

  const [maxPage, setMaxPage] = useState(0);

  const getDataLength = async () => {
    const response = await getTodayDataApi(0, 0, TODAY);
    const page = ~~(response.length / 50) + 1;

    setMaxPage(page);
  };

  useEffect(() => {
    getDataLength();
    console.log('usePage Effect');
  }, []);

  return { currentPage, maxPage };
};

export default usePage;
