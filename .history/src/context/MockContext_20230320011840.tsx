import { MockResponse } from '../api/types/mock';
import useMockList from '../hooks/useMockList';
import { createContext, ReactNode } from 'react';

const MockContext = createContext<MockResponse[] | undefined>(undefined);

export default function mockContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const originList = useMockList();
  return <MockContext.Provider value={{ originList }}></MockContext.Provider>;
}
