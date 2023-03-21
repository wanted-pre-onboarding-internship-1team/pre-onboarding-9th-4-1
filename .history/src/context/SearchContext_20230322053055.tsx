import { createContext, useContext } from 'react';

type ContextType = { keyword: string };

export const SearchContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  return;
}

export const useSearchContext = () => useContext(SearchContext)! as ContextType;
