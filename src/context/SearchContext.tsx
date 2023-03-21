import { createContext, useContext, useMemo, useState } from 'react';

type ContextType = {
  keyword: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchContext = createContext<ContextType | undefined>(undefined);

type PropsType = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: PropsType) {
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
