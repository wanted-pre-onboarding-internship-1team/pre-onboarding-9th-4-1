import { createContext, useContext, useMemo, useState } from 'react';

type ContextType = { keyword: string };

export const SearchContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const context = useMemo(() => ({ keyword, handleChange }), [keyword]);

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
}

export const useSearchContext = () => useContext(SearchContext)! as ContextType;
