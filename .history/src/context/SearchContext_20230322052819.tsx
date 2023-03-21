import { createContext } from 'react';

export const SearchContext = createContext<{ keyword: string } | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  return;
}
