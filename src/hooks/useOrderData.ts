import { getTodayDataApi } from '../api/dataApi';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const useOrderData = () => {
  const [pageList, setPageList] = useState([]);

  const { data: todayData } = useQuery('todayData', getTodayDataApi, {
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (todayData) {
      setPageList(todayData);
    }
  }, [todayData]);

  return {
    pageList,
  };
};

export default useOrderData;
