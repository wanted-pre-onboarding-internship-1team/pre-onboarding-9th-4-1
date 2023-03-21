import { createContext } from 'react';

const SearchContext = createContext<{ keyword: string } | undefined>(undefined);

type Props = {
	children: React.ReactNode;
}

const SearchContextProvider({children})
