import { createContext, useContext } from 'react';

export const SearchContext = createContext<{ keyword: string } | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  return;
}

export const useSearchContext = () =>
  useContext(SearchContext)! as SearchContext;
