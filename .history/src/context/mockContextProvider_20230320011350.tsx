import { MockResponse } from '../api/types/mock';
import { createContext } from 'react';

const MockContext = createContext<MockResponse[] | undefined>(undefined);

export default function mockContextProvider() {
  return <div></div>;
}
