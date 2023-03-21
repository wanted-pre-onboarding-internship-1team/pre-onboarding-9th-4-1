import { createContext, useContext, useState } from 'react';

type ContextType = { keyword: string };

export const SearchContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  const [keyword, setKetword] = useState('');
  return;
}

export const useSearchContext = () => useContext(SearchContext)! as ContextType;
